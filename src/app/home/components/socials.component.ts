import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  template: `
    <app-social-icon
      *ngFor="let social of socials"
      [socialId]="social.id"
      [link]="social.link"
    ></app-social-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full lg:w-1/2 grid grid-cols-6 lg:grid-cols-3 gap-2 mb-4',
  },
})
export class SocialsComponent {
  socials = [
    { id: 'Github', link: 'https://github.com/ericambiel' },
    { id: 'LinkedIn', link: 'https://www.linkedin.com/in/ericambiel/' },
    // { id: 'Twitter', link: '' },
    { id: 'Facebook', link: 'https://www.facebook.com/ericambiel' },
    // { id: 'Stackoverflow', link: '' },
    // { id: 'Youtube', link: '' },
  ];
}
