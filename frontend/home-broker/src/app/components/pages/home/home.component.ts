import { Component, OnInit } from '@angular/core';
import { PatrimonioService } from 'src/app/services/patrimonio.service';
import { PatrimonioInterface } from 'src/app/interfaces/Patrimonio';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  patrimonio?: PatrimonioInterface;
  baseApiUrl = environment.baseApiUrl;

  constructor(private patrimonioService: PatrimonioService) {}

  ngOnInit(): void {
    this.patrimonioService.getPatrimonio().subscribe((response) => {
      this.patrimonio = response;
    });
  }
}
