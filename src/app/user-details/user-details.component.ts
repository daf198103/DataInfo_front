import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  usr: User = new User();
  user: Array<User> = new Array<User>();
  username:string;
  submitted = false;
  naoexiste = false;
  
  usuario:FormGroup;

  constructor(private userService: UserService, private listComponent: UserListComponent,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var usercpf = this.getByCpf(params["id"]);

  });
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

  getByCpf(cpf:number){
    this.userService.getUserByCpf(cpf)
    .then((resposta)=>{
      this.usr = resposta;
    }) 
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.usuario.value.userName == ''){
      this.usr.userName;
    }else{this.usr.userName = this.usuario.value.userName;}

    if(this.usuario.value.cpf == ''){
      this.usr.cpf;  
    }else{ this.usr.cpf = this.usuario.value.cpf;}
    if(this.usuario.value.cpf == ''){
      this.usr.email;
    }else{this.usr.email = this.usuario.value.email;}
    if(this.usuario.value.function == ''){
      this.usr.function;  
    }else{this.usr.function = this.usuario.value.function;}
    if(this.usuario.value.phone == ''){
      this.usr.phone;
    }else{ this.usr.phone = this.usuario.value.phone;}
    if(this.usuario.value.situation == ''){
      this.usr.situation;
    }else{this.usr.situation = this.usuario.value.situation;}
    if(this.usuario.value.accessProfile == ''){
      this.usr.accessProfile;
    }else{this.usr.accessProfile = this.usuario.value.accessProfile;}
    
    console.log(this.usr.userName);
    this.userService.updateUser(this.usr);
    this.naoexiste = true;
  }

  fechar(){
    window.location.replace("user-list");
  }

}
