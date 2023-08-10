import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productsToShow = this.productsService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const description = params.get('description')?.toLowerCase();

      if(description) {
        this.products = productsToShow.filter(product => product.description.toLocaleLowerCase().includes(description));
        return;
      }

      this.products = productsToShow
    });
  }
}
