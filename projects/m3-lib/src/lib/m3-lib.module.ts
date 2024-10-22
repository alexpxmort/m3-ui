import { NgModule } from '@angular/core';
import { M3InputComponent } from './m3-input/m3-input.component';

@NgModule({
  declarations: [M3InputComponent],
  exports: [M3InputComponent] // Exporte o componente para uso externo
})
export class M3LibModule {}
