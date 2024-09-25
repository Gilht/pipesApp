import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {

  public name: string = "fernando";
  public gender: "male"|"female" = "male";

  public invitationMap = {
    male: "invitarlo",
    female: "invitarla"
  }

  changeClient(): void {
    this.name = "Melissa";
    this.gender = "female";
  }
}

