import { NgModule } from '@angular/core';
import { MyCardComponent } from './my-card/my-card.component';

@NgModule({
  declarations: [MyCardComponent],
  exports: [MyCardComponent]
})
export class ComponentsModule {}
