import { Component } from '@angular/core';
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
