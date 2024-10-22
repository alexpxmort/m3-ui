import { Component, Input } from '@angular/core';

@Component({
  selector: 'm3-input',
  templateUrl: './m3-input.component.html',
  styleUrls: ['./m3-input.component.css'] // Corrigido de styleUrl para styleUrls
})
export class M3InputComponent {
  @Input() header: string = "";
  @Input() id: string = "";
}
