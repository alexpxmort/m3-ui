import { Component, Input } from '@angular/core';

@Component({
  selector: 'm3-input',
  standalone: true,
  imports: [],
  templateUrl: './m3-input.component.html',
  styleUrl: './m3-input.component.css'
})
export class M3InputComponent {
  @Input() header:string="";
  @Input() id:string="";
}
