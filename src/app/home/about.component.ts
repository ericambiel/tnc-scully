import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <p class="font-thin text-lg mb-2">Hello world,</p>
    <p class="font-thin text-lg mb-2">
      As you probably already notice, I am Chau. I am currently working as a Sr. Engineer for
      <a
        href="https://nrwl.io/"
        rel="noreferrer"
        target="_blank"
        class="text-primary underline cursor-pointer"
      >
        Narwhal
      </a>
      . Follow us at
      <a
        href="https://twitter.com/nrwl_io"
        rel="noreferrer"
        target="_blank"
        class="text-primary underline cursor-pointer"
      >
        @nrwl_io
      </a>
    </p>
    <p class="font-thin text-lg mb-2">
      This is the place that I use to share my knowledge about programming and personal stuffs with
      the world. With that said, the blog will focus on Web Technologies like Angular, React,
      TypeScript, NestJS etc. on the tech side of things and will probably be about any random
      things about my daily life activities. My personal blog was powered by
      <a
        href="https://gatsbyjs.org"
        rel="noreferrer"
        target="_blank"
        class="text-primary underline cursor-pointer"
      >
        GatsbyJS
      </a>
      but now is written with
      <a
        href="https://angular.io"
        rel="noreferrer"
        target="_blank"
        class="text-primary underline cursor-pointer"
      >
        Angular
      </a>
      and
      <a
        href="https://scully.io"
        rel="noreferrer"
        target="_blank"
        class="text-primary underline cursor-pointer"
      >
        Scully
      </a>
    </p>
    <p class="font-thin text-lg mb-2">
      I hope you will gain something (some knowledge, some argument worth argue for, or maybe a
      smile) here on this blog. If you have any question, or absolutely anything at all, please do
      not hesitate to reach out to me on any of the social medium listed in the info box. See y'all
      around 👋
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AboutComponent }])],
})
export class AboutModule {}
