import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  usuario:FormGroup;


  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    
    this.usuario = new FormGroup({
      userName :new FormControl(''), 
      cpf: new FormControl(''), 
      function: new FormControl(''),
      email: new FormControl(''),
      situation: new FormControl(''),
      accessProfile: new FormControl(''),
      phone: new FormControl(''),
      });
  }

  onSubmit() {
    this.user.userName = this.usuario.value.userName;
    if(this.cpf(this.usuario.value.cpf)){
      this.user.cpf = this.usuario.value.cpf;  
      this.user.cpf = this.usuario.value.cpf;
      this.user.email = this.usuario.value.email;
      this.user.function = this.usuario.value.function;
      this.user.phone = this.usuario.value.phone;
      this.user.situation = this.usuario.value.situation;
      this.user.accessProfile = this.usuario.value.accessProfile;
      console.log(this.user.userName);
      
      this.userService.createUser(this.user)
      .then((resposta)=>{
        if(resposta == null){
          alert("Usuário já cadastrado!");
          this.fechar();
        }
        else
        {
          this.submitted = true;
        }

      });
    }else{
      alert("CPF Inválido!");
    }
    

    
    
  }
  
  fechar(){
    window.location.replace("user-list");
  }

  cpf(cpf: string): boolean {
    if (cpf == null) {
        return false;
    }
    if (cpf.length != 11) {
        return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
        caracter = cpfAux.charAt(i);
        if (numeros.search(caracter) == -1) {
            return false;
        }
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
        digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
        caracter = cpfAux.charAt(i);
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
        digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
        return false;
    }
    else {
        return true;
    }
}

  
    

  
}
