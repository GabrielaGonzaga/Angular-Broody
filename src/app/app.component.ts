import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  cartCount: number = 0;
  products: any[] = [
    {
      name: 'Saia Urban Militar',
      price: 129.99,
      image: 'https://s3-alpha-sig.figma.com/img/1228/bbd5/6bbf002e71c0da7013d787d802718aee?Expires=1696809600&Signature=pGYgDu5H7P3I8fRnYQgpygMsVbfUnt~ZPyT90BWylSnBfncybnYiLvttGRxacPyOzam66gAC5kSUm4eb232K5Whgkv4a1jsxZ~RxncBiCX9-mCWVVFfuN4MSx3jjwS6Wqq9rAIawcT0cCYwuiJ~WdnFaxr8LTnM1OKu87M9xLb3AsYctEo4XMAa5l1PmABhI02R-uBLrgclxkzpau7M8-K5AYdGqve4KrbTDCu9Su46bqoMcIWIdZjguAczx0V8~dNlb9BKb-e3nnM0udfJkuMW-5ikCS7xeDm8~E4n87KfT1ASzKre8deEA4ok5B1~wdwZkZRDuDUEsMjSIePheNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      name: 'Low Cropped',
      price: 89.99,
      image: 'https://s3-alpha-sig.figma.com/img/2b97/7fce/9a4153fc2d221801098cfd7b440376c4?Expires=1696809600&Signature=XJIZZ77~UTk3bJwMHmJI2ckj6o9Xy8IxM2H571KtVU-l2o-U4pBXceeGY5zlVTwuNcmmQqWTW6y01oqx7Pc-PWo4sbH6uSJtLk~sFmI88IuQnqWJ-1we817nlEaf4B-yNUPtoKncoe-LI1moCYStQE8YOHmLwua3wSHwnir4~rlI8M-StOErFcw8V3FIk0gDO2jJu7C6itQDER8dzSaWTPC6y7h25OMlb8ySaIjAHSrPENyC2zAoJtTQ5-waJxWHZnOq1iI6254ZMzhu9qTlHOz4BLFkLBTeSOFqYiymWZxUWg0zxqzjvoPREZFxlJWYVOJySfop195teMfWLSYStw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      name: 'Calça Cargo',
      price: 110.99,
      image: 'https://s3-alpha-sig.figma.com/img/ae53/e910/803604ae4ecce3d14190c72f82fff320?Expires=1696809600&Signature=nxnrhfqqt06AHXT9TuhuCTD1oNi3tPNFr1iMYBwS6soQTyuvfPaqdhmQxm3WWhCLq5Ovj9F8By3T4axdmMJs2-oRSnu5QmpeDbPSF6pQaJldW19TGFq5-2FleryWWcZ9ROGjDFovz35sj3neqZFnHNIZNOjVFI5PTHxldz4g5qmSkm3QgpTdzR~~vA6fJ-4R~pFa5MT7mRd05ppIPBXY2dS5eF5ssSgOiSZjAbt3z0HqKZIhGa78xl0mmFablxNhxEFjBiQaaSq1VzApng8ttM8rSvKzVijInj0J~cyAjBRwCwCqmUfAU52tKpvOdqrEtAHmTNoZ6Szf7Y7DU4EkTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
  ];

  cart: any[] = [];
  cartModal: boolean = false; 

  addToCart(product: any) {
    this.cart.push(product);
    this.cartCount++;
  }
  

  calculateTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  showCart() {
    this.cartModal = true;
  }

  closeCart() {
    this.cartModal = false;
  }
}
