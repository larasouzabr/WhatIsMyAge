import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgeServiceService } from 'src/services/age-service.service';
import { age } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatIsMyAge';
  searchRes!: age;
  searchStr!: string;
  newConsult! : boolean;
  public searchForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required)
  });

  constructor(
    private ageServ : AgeServiceService  
      ) { }


  getNameAge() {
    this.ageServ.getAge(this.searchStr).subscribe(res => {
      this.searchRes = res;
      console.log(this.searchRes);
      this.newConsult = false;
    }
    )
  }
  goBack(){
    this.searchForm.reset();
    this.newConsult = true;
    this.searchStr = '';
  }
}