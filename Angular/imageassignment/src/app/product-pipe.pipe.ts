import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './structuredirective/Iproduct';

@Pipe({
  name: 'productPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(value: Product[], args: number): Product[] {
    if (!args) {
      return value;
    }
    return value.filter(
      item => (item.Price > args)
    )
  }

}
