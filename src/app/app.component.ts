import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgeServiceService } from 'src/services/age-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatIsMyAge';
  searchRes!: Array<Object>;
  searchStr!: string;
  
  public searchForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required)
  });

  constructor(
    private ageServ : AgeServiceService  
      ) { }


  getNameAge() {
    this.ageServ.getName(this.searchStr).subscribe(res => {
      this.searchRes = res;
      console.log(this.searchRes)
    })
  }
}