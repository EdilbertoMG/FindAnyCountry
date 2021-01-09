import { Component, OnInit } from '@angular/core';
import { FindAnyCountryService } from 'src/app/services/find-any-country.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  country:any = [];

  africa:any = [];
  americas:any = [];
  asia:any = [];
  europe:any = [];
  oceania:any = [];

  loading: boolean;
  veryfidata: boolean;

  constructor(private anyCountryService:FindAnyCountryService) { }

  ngOnInit(): void {
    this.loading = true;
      this.anyCountryService.getAllCountry()
          .subscribe((data: any) => {
              this.country = data
              if (this.country.length == 0) {
                  this.veryfidata = true;
                  this.loading = false;
              } else {
                  this.veryfidata = false;
                  this.loading = false;
                  this.country.forEach(element => {
                    if (element.region === "Africa") {
                      this.africa.push(element);
                    }else if(element.region === "Americas"){
                      this.americas.push(element);
                    }else if(element.region === "Asia"){
                      this.asia.push(element);
                    }else if(element.region === "Europe"){
                      this.europe.push(element);
                    }else{
                      this.oceania.push(element);
                    }
                    });
              }
          })
  }
}