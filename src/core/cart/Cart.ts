import { Product } from "../products";
import { Shipping } from "../utils/Shipping";

export class Cart {
  private readonly items: Product[];
  readonly shipping: Shipping;
  readonly discount = 0.2

  constructor(items: Product[] = [], shipping: Shipping = Shipping.FRETE_GRATUITO) {
    this.items = items;
    this.shipping = shipping;
  }

  addItem(product: Product, quantity: number): Cart {
    const itemsCopy = [...this.items];
    const index = itemsCopy.findIndex(p => p.id === product.id);

    if (index >= 0) {
      const existing = itemsCopy[index];
      itemsCopy[index] = { ...existing, quantity: (existing.quantity ?? 0) + quantity };
    } else {
      itemsCopy.push({ ...product, quantity });
    }

    return new Cart(itemsCopy, this.shipping);
  }

  removeItem(product: Product): Cart {
    const itemsCopy = this.items.filter(p => p.id !== product.id);
    return new Cart(itemsCopy, this.shipping);
  }

  updateQuantity(product: Product, quantity: number): Cart {
    if (quantity <= 0) return this.removeItem(product);

    const itemsCopy = this.items.map(p =>
      p.id === product.id ? { ...p, quantity } : p
    );
    return new Cart(itemsCopy, this.shipping);
  }

  clear(): Cart {
    return new Cart([], this.shipping);
  }

  setShipping(shipping: Shipping): Cart {
    return new Cart(this.items, shipping);
  }

  subtotal(): number {
    return this.items.reduce((acc, item) => acc + (item.price * (item.quantity ?? 0)), 0);
  }

  total(): number {
    return this.subtotal() + this.shippingValue -  this.calculateDiscount();
  }

  calculateDiscount = (): number => {
    return this.subtotal() * this.discount;
  }

  get shippingValue(): number {
    return this.shipping;
  }

  get discountValue(): number {
    return this.discount
  }

  get cartItems(): Product[] {
    return [...this.items];
  }

}

