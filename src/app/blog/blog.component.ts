import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { defer, EMPTY, from, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { MetaService } from '../shared/services/meta.service';
import { Frontmatter } from '../shared/frontmatter';
import {
  catchError,
  mapTo,
  pairwise,
  startWith,
  switchMap,
  switchMapTo,
  tap,
  timeout,
} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  isProd = environment.production;
  blog$: Observable<Frontmatter> = of(this.isProd).pipe(
    switchMap((isProd) => {
      return defer(() => {
        if (isProd && this.swUpdate.isEnabled) {
          return from(this.swUpdate.checkForUpdate()).pipe(
            switchMapTo(
              this.swUpdate.available.pipe(
                timeout(10000),
                mapTo(true),
                startWith(false),
                pairwise(),
                catchError(() => of([false, null])),
              ),
            ),
            switchMap(([_, hasUpdate]) => {
              if (hasUpdate) {
                this.swUpdate.activateUpdate().then(() => window?.location?.reload());
                return EMPTY;
              }

              return this.scullyRoutesService.getCurrent();
            }),
          );
        }

        return this.scullyRoutesService.getCurrent();
      }).pipe(
        tap((blog: Frontmatter) => {
          this.metaService.update({ ...blog, url: `${environment.baseUrl}${blog.route}` });
        }),
      );
    }),
  );

  // blog$ = of(null);

  constructor(
    private readonly scullyRoutesService: ScullyRoutesService,
    private readonly metaService: MetaService,
    private readonly swUpdate: SwUpdate,
  ) {}
}
