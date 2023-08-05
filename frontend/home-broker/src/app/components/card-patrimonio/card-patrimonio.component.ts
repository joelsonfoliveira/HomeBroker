import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-patrimonio',
  templateUrl: './card-patrimonio.component.html',
  styleUrls: ['./card-patrimonio.component.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class CardPatrimonioComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
originally bred for hunting.`;
}
