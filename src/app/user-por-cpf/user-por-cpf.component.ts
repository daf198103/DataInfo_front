import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-por-cpf',
  templateUrl: './user-por-cpf.component.html',
  styleUrls: ['./user-por-cpf.component.css']
})
export class UserPorCpfComponent implements OnInit {

  cpf:FormGroup;
  user: User = new User();
  submitted = false;
  naoexiste = false;
  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    this.cpf = new FormGroup({
      cpf: new FormControl(''), 
  });
}

onSubmit(){
  this.userService.getUserByCpf(this.cpf.value.cpf)
 .then((resposta)=>{
   if(resposta==null){
    this.naoexiste = true;
   }else{
    this.user = resposta;
    this.submitted = true;
   }
   
   
 })
}

}
