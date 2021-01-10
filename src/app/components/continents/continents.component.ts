import { Component, OnInit } from '@angular/core';
import { FindAnyCountryService } from 'src/app/services/find-any-country.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html'
})
export class ContinentsComponent implements OnInit {

  region: string = "";
  country:any = [];
  OneCountry:any = [];

  africa:any = [];
  americas:any = [];
  asia:any = [];
  europe:any = [];
  oceania:any = [];

  loading: boolean;
  veryfidata: boolean;

  constructor(private anyCountryService: FindAnyCountryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
          this.region = params['region'];
          this.anyCountryService.getOneRegion(this.region)
            .subscribe((data: any) => {
              this.country = data
              if (this.country.length == 0) {
                  this.veryfidata = true;
                  this.loading = false;
              } else {
                this.loading = true;
                  this.veryfidata = false;
                  this.loading = false;
                  this.africa = [];
                  this.americas = [];
                  this.asia = [];
                  this.europe = [];
                  this.oceania = [];
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
          this.loading = false;
      })
  }
}