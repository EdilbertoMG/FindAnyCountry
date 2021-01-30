import { Component, Input, OnInit } from '@angular/core';
import { FindAnyCountryService } from 'src/app/services/find-any-country.service';
@Component({
  selector: 'app-all-continents',
  templateUrl: './all-continents.component.html',
  styleUrls: ['./all-continents.component.css']
})
export class AllContinentsComponent implements OnInit {

  @Input()country:any = [];
  OneCountry:any = [];

  @Input() africa:any = [];
  @Input() americas:any = [];
  @Input() asia:any = [];
  @Input() europe:any = [];
  @Input() oceania:any = [];

  @Input() loading: boolean;
  @Input() veryfidata: boolean;
  loading2: boolean;
  veryfidata2: boolean;
  nombres:string = "";
  constructor(private anyCountryService:FindAnyCountryService) { }

  ngOnInit(): void {
  }

  consultarBorderCountries(){
    let separados = [];
    if (this.OneCountry.borders.length > 0) {                   
      this.OneCountry.borders.forEach((element,idx) => {
        this.anyCountryService.getOneCountry(element)
        .subscribe((datos: any) => {
          if (this.OneCountry.borders.length == idx+1) {
            separados = datos[0].name.split(" ",1);
            this.nombres += separados[0]
          }else{
            separados = datos[0].name.split(" ",1);
            this.nombres += separados[0] + ", ";
          }              
        })
        }
      );
    }
  }

  openModal(code){
    let modaltitle = "",
    modalBody = "";

    this.loading2 = true;

      this.anyCountryService.getOneCountry(code)
          .subscribe((data: any) => {
              this.OneCountry = data[0]
              if (this.OneCountry.length == 0) {

                  this.veryfidata2 = true;
                  this.loading2 = false;            
              } else {

                this.veryfidata2 = false;
                this.loading2 = false;

                modaltitle = `<h5 class="modal-title" id="exampleModalLabel"><strong style="color: #09295e;">${this.OneCountry.name}</strong> <i id="${"estrella"+this.OneCountry.alpha3Code}" class="fas fa-star"></i></h5>`;
                modalBody = `
                          <p style="color: #4f4f4f;"><strong>Region:</strong> ${this.OneCountry.region}</p>
                          <p style="color: #4f4f4f;"><strong>Populations:</strong> ${this.OneCountry.population}</p>
                          <p style="color: #4f4f4f;"><strong>Capital:</strong> ${this.OneCountry.capital}</p>
                          <p style="color: #4f4f4f;"><strong>Language:</strong> ${this.OneCountry.languages[0].nativeName}</p>
                          <p style="color: #4f4f4f;"><strong>Border Countries:</strong> ${this.OneCountry.borders}</p>
                          <p style="color: #4f4f4f;"><strong>Flag:</strong></p>
                          <img class="img-fluid img-thumbnail" src="${this.OneCountry.flag}" alt="${this.OneCountry.name}" width="200px" height="200px">
                `;
                document.getElementById('modal-title').innerHTML = modaltitle;
                document.getElementById('modalBody').innerHTML = modalBody;      
              }         
          })
  }

  
}
