import { Component, OnInit } from '@angular/core';
import { FindAnyCountryService } from 'src/app/services/find-any-country.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  country:any = [];

  africa:any = [];
  americas:any = [];
  asia:any = [];
  europe:any = [];
  oceania:any = [];

  loading: boolean;
  veryfidata: boolean;
  nodata: boolean;

  constructor(private anyCountryService: FindAnyCountryService) { }

  ngOnInit(): void {
    this.veryfidata = true;
  }

  buscar(finished: string) {
    
      this.loading = true;
      this.anyCountryService.getByName(finished)
          .subscribe((data: any) => 
          {
            this.country = data;
            if (this.country.length == 0) {
                this.nodata = true;
            } else {
                  this.loading = true;
                  this.veryfidata = false;        
                  this.nodata = false;
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
            this.loading = false;
            },
            (error) => {
                console.error(error);
                this.nodata = true;
                this.loading = false;
            }
          )
        } 
    }