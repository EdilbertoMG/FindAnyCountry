import { Component, OnInit } from '@angular/core';
import { FindAnyCountryService } from 'src/app/services/find-any-country.service';
import { Router, ActivatedRoute} from '@angular/router';
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

  constructor(private anyCountryService: FindAnyCountryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.country = params['country'];

      this.loading = true;

      this.anyCountryService.getByName(this.country)
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
  })
  }
}