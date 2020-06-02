import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MetaService } from '../shared/services/meta.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="grid col-gap-4 grid-cols-1 lg:grid-cols-4">
      <div class="col-span-4 lg:col-span-1">
        <div class="max-w-full lg:max-w-sm rounded overflow-hidden shadow-lg p-4">
          <app-avatar></app-avatar>
          <app-info></app-info>
          <app-navigation></app-navigation>
          <app-socials></app-socials>
          <app-copyright></app-copyright>
        </div>
      </div>
      <div class="col-span-4 lg:col-span-3">
        <div class="rounded overflow-hidden shadow-lg p-4">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private readonly metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.resetMeta();
  }
}
