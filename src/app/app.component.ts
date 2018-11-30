import { Component } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';
  products = []


  BASE_URL = 'http://localhost:3000';


  ngOnInit() {
     axios
      .get(this.BASE_URL + '/list/products')
      .then(result => {
        this.products = result.data
      })
      .catch(e => console.log(e))
  }

}

