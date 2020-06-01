import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-all-blogs-btn',
  template: `
    <a
      class="px-4 py-2 rounded-full inline-block border border-gray-300 cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out lg:fixed lg:left-1"
      [routerLink]="['/']"
    >
      All Blogs
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllBlogsBtnComponent {}
