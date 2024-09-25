import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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

  //i18plural
  public clients: string[] = ["Maria", "Pedro", "Fernando", "Melissa", "Luis"];
  public clientsMap = {
    "=0": "no tenemos clientes esperando",
    "=1": "tenemos un cliente esperando",
    "=2": "tenemos 2 personas esperando",
    "other": "tenemos # clientes esperando"
  }

  borrarCliente(): void {
    this.clients.shift(); 
  }

  //keyValue pipe
  public person = {
    name: "luis",
    age: 34,
    address: "new york, usa"
  }

  //Async pipe
  public myObservableTimer = interval(2000)
  .pipe(
    tap(value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tenemos data en la promesa");
    },3000);
  })
}

