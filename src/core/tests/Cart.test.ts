import { Cart } from "../cart"
import { Product } from "../products"
import { Shipping } from "../utils";

export const mockProduct: Product = {
  id: 1000,
  slug: "super-headphones",
  name: "Super Headphones",
  quantity: 10,
  image: {
    mobile: "/images/product-super-headphones/mobile.jpg",
    tablet: "/images/product-super-headphones/tablet.jpg",
    desktop: "/images/product-super-headphones/desktop.jpg",
  },
  category: "headphones",
  categoryImage: {
    mobile: "/images/category-headphones/mobile.jpg",
    tablet: "/images/category-headphones/tablet.jpg",
    desktop: "/images/category-headphones/desktop.jpg",
  },
  new: true,
  price: 1299,
  rating: 4.8,
  description: "Os Super Headphones oferecem qualidade de som excepcional e conforto durante horas de uso.",
  features: "Drivers dinâmicos de 50mm, isolamento acústico, suporte a alta resolução de áudio.",
  includes: [
    { quantity: 1, item: "Headphones" },
    { quantity: 1, item: "Carregador USB-C" },
    { quantity: 2, item: "Almofadas extras" },
  ],
  gallery: {
    first: {
      mobile: "/images/product-super-headphones/gallery/first-mobile.jpg",
      tablet: "/images/product-super-headphones/gallery/first-tablet.jpg",
      desktop: "/images/product-super-headphones/gallery/first-desktop.jpg",
    },
    second: {
      mobile: "/images/product-super-headphones/gallery/second-mobile.jpg",
      tablet: "/images/product-super-headphones/gallery/second-tablet.jpg",
      desktop: "/images/product-super-headphones/gallery/second-desktop.jpg",
    },
    third: {
      mobile: "/images/product-super-headphones/gallery/third-mobile.jpg",
      tablet: "/images/product-super-headphones/gallery/third-tablet.jpg",
      desktop: "/images/product-super-headphones/gallery/third-desktop.jpg",
    },
  },
  others: [
    {
      slug: "wireless-earbuds",
      name: "Wireless Earbuds",
      image: {
        mobile: "/images/product-wireless-earbuds/mobile.jpg",
        tablet: "/images/product-wireless-earbuds/tablet.jpg",
        desktop: "/images/product-wireless-earbuds/desktop.jpg",
      },
    },
    {
      slug: "studio-speaker",
      name: "Studio Speaker",
      image: {
        mobile: "/images/product-studio-speaker/mobile.jpg",
        tablet: "/images/product-studio-speaker/tablet.jpg",
        desktop: "/images/product-studio-speaker/desktop.jpg",
      },
    },
  ],
}


describe("Test of Cart", () => { 

    it("add new item to cart", () => {
        let cart = new Cart(); 

        cart = cart.addItem(mockProduct, 1);

        const itemAdded = cart.cartItems.find(item => item.id === mockProduct.id);

        expect(itemAdded).toBeDefined();
        expect(itemAdded?.id).toBe(mockProduct.id);
        expect(itemAdded?.quantity).toBe(1);
    })

    it("add item already in cart", () => {
      let cart = new Cart();
      
      cart = cart.addItem(mockProduct, 1);
      cart = cart.addItem(mockProduct, 1);

      const itemAdded = cart.cartItems.find(item => item.id === mockProduct.id);

      expect(itemAdded).toBeDefined();
      expect(itemAdded?.quantity).toBe(2);
    })

    it("add existing item to cart", () => {
        let cart = new Cart();

        cart = cart.addItem(mockProduct, 1);
        cart = cart.addItem(mockProduct, 2);

        const itemAdded = cart.cartItems.find(item => item.id === mockProduct.id);

        expect(itemAdded).toBeDefined();
        expect(itemAdded?.quantity).toBe(3);
    })

    it("remove item from cart", () => {
        let cart = new Cart();

        cart = cart.addItem(mockProduct, 1);
        cart = cart.removeItem(mockProduct);

        const itemRemoved = cart.cartItems.find(item => item.id === mockProduct.id);

        expect(itemRemoved).toBeUndefined();        
    })
    
    it("remove item if quantity is zero", () => {
        let cart = new Cart();

        cart = cart.addItem(mockProduct, 1);
        cart = cart.updateQuantity(mockProduct, 0);
        
        const itemRemoved = cart.cartItems.find(item => item.id === mockProduct.id);

        expect(itemRemoved).toBeUndefined();
    })

    it("update item quantity in cart", () => {
        let cart = new Cart();

        cart = cart.addItem(mockProduct, 1);
        cart = cart.updateQuantity(mockProduct, 5);

        const itemUpdated = cart.cartItems.find(item => item.id === mockProduct.id);

        expect(itemUpdated).toBeDefined();
        expect(itemUpdated?.quantity).toBe(5);
    })

    it("clear cart", () => {
        let cart = new Cart();

        cart = cart.addItem(mockProduct, 1);
        cart = cart.clear();

        expect(cart.cartItems.length).toBe(0);
    })

    it("set shipping", () => {
        const shippingValue: Shipping = 15

        let cart = new Cart();
        cart = cart.setShipping(shippingValue);

        expect(cart.shippingValue).toBe(shippingValue);
    })

    it("calculate subtotal", () => {
        let cart = new Cart();

        cart = cart.addItem(mockProduct, 2);
        const subtotal = cart.subtotal();

        expect(subtotal).toBe(mockProduct.price * 2);
    })

    it("calculate total", () => {
        let cart = new Cart();
        const shippingValue: Shipping = 15
        const discount = cart.discount

        cart = cart.addItem(mockProduct, 2);
        cart = cart.setShipping(shippingValue);
        const total = cart.total();

        expect(total).toBe(cart.subtotal() + shippingValue - (cart.subtotal() * discount));
    })

    it("calculate discount", () => {
        let cart = new Cart();
        const discount = cart.discount

        cart = cart.addItem(mockProduct, 2);
        const calculatedDiscount = cart.calculateDiscount();

        expect(calculatedDiscount).toBe(cart.subtotal() * discount);
    })

    it("get cart items empty", () => {
      const cart = new Cart();
      
      expect(cart.cartItems).toEqual([]);
    })

     it("get cart items with items", () => {
      let cart = new Cart();

      cart = cart.addItem(mockProduct, 2);

      expect(cart.cartItems.length).toBe(1);
      expect(cart.cartItems[0].id).toBe(mockProduct.id);
      expect(cart.cartItems[0].quantity).toBe(2);
    })

    it("get discount value", () => {
      const cart = new Cart();
      expect(cart.discountValue).toBe(0.2);
    })
})