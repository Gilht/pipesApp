import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {
  public nameLower: string = "gilberto";
  public nameUpper: string = "GILBERTO";
  public fullName: string = "GilbErTo HdZ";
}
