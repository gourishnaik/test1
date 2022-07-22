import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm!: FormGroup;

  title = 'login';
  url1="./assets/images/green.jpg";

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    
    this.myForm=this.formbuilder.group({
      email    :['',Validators.required],
      password :['',Validators.required],


    })
  }


  onSubmit(form: FormGroup) {
    console.log('email', form.value.email);
    console.log('password', form.value.password);
    this.myForm.reset();
    alert("Response has been submited")
  }


}
