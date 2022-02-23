import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {




  miFormulario : FormGroup = this._fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this._vs.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this._vs.emailPattern)] , [this._emailValidator]],
    username : ['',[Validators.required, noPuedeSerStrider] ],
    password : ['',[Validators.required, Validators.minLength(6)]],
    password2 : ['',[Validators.required] ],  
  },{
    validators:[ this._vs.camposIguales('password','password2')]
  }
  );


  get emailErrorMsg() {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El email es obligatorio';
    }else if(errors?.pattern){
      return 'El email no tiene el formato correcto';
    }else if(errors?.emailTomado){
      return 'El email ya fue tomado';
    }

    return '';
  }



  constructor
  (
    private _fb: FormBuilder,
    private _vs : ValidatorService,
    private _emailValidator : EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jorge Quintui',
      email: 'test1@test.com',
      username : 'x4leqxinn',
      password : 'jorge1234',
      password2 : 'jorge1234'
    })
  }

  campoNoValido(campo : string){
    return this.miFormulario.get(campo)?.invalid 
    && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }



}
