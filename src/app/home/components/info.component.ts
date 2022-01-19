import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <p class="font-bold mb-4 text-xl">Chau Tran</p>
    <p class="font-hairline mb-4">
      I'm a developer passionate about TypeScript and DevOps, currently focused on backend and 
      infrastructure automations. Most used tools Node, Angular, TypeORM, Typegoose, Express, Jest, 
      Celebrate.
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {}
