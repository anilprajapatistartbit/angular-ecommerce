import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/core/Model/Address';
import { ProductsService } from '../admin/Services/products.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {
  constructor(private Addressservice: ProductsService) {

  }
  Address = new FormGroup({
    Country: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    City: new FormControl('', [Validators.required]),
    ZipCode: new FormControl('', [Validators.required]),
    StreetAddress: new FormControl('', [Validators.required])
  })

  get State() {
    return this.Address.get("State");
  }
  get Country() {
    return this.Address.get("Country");
  }
  get City() {
    return this.Address.get("City");
  }
  get ZipCode() {
    return this.Address.get("ZipCode");
  }
  get StreetAddress() {
    return this.Address.get("StreetAddress");
  }

  AddAddress() {
    var user = localStorage.getItem("logged_in");
    if (user)
      var parseduser = JSON.parse(user);

    var userid = parseduser.Id;
    var Address: Address = {


      City: this.City?.value ?? "",
      Country: this.Country?.value ?? "",
      State: this.State?.value ?? "",
      ZipCode: this.ZipCode?.value as unknown as number ?? 0,
      StreetAddress: this.StreetAddress?.value ?? "",
      Id: 0,
      UserId: userid
      , toJson() { }
    };
    console.log(Address);

    this.Addressservice.AddAddress(Address).subscribe(res => {

      alertifyjs.set('notifier', 'position', 'top-right');
      alertifyjs.success("Address Added Successfully");
      

    }, err => {
      alertifyjs.set('notifier', 'position', 'top-right');
      alertifyjs.error("Something Went Wrong");

    })
  }
}
