import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
          {
            label: "Angular Pipes",
            icon: "pi pi-desktop",
            items: [
              {
                label: "Textos y Fechas",
                icon: "pi pi-align-left"
              },
              {
                label: "Numeros",
                icon: "pi pi-dollart"
              },
              {
                label: "No Comunes",
                icon: "pi pi-globe"
              },
            ]
          },
          {
            label: "Pipes Personalizados",
            icon: "pi pi-cog",
            items: [
              {
                label: "Otro elemento",
                icon: "pi pi-cog",
              }
            ]
          }
        ];
    }
}
