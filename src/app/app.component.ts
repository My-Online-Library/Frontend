import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      this.authors = [{
        name: 'Pedro Mir',
        dateOfBirth: new Date(),
      },
      {
        name: 'Pedro Mir',
        dateOfBirth: new Date(),
      }]
    }, 5000);
    this.authors = [];
  }
  title = 'Al valor que yo quiera';
  ocultar = false;
  authors;

  duplicarNumero(valor: number): number {
    return valor * 2;
  }

  manejarRated(voto: number): void {
    alert(voto);
  }
}
