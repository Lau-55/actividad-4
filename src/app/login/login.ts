import { Component } from '@angular/core';
import { Password } from '../password/password';
import { Username } from '../username/username';

@Component({
  selector: 'app-login',
  imports: [Username,Password],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
