import { useState, useEffect } from 'react';
import data from '../../data.json';

// type CartProps = {
//   name: string;
//   quantity: number;
// }[];

type ProductDetails = {
  quantity: number;
  price: number;
};

interface CartProps {
  [name: string]: ProductDetails;
}

function getProductDetails(name: string): [number, string] {
  const productData = data.find((product) => {
    return name === product.slug;
  });

  return [productData!.price, productData!.slug];
}

function isPresent(name: string, cart: CartProps) {
  console.log(cart, name);
  return cart[name];
}

export default function useCart() {
  const [cart, setCart] = useState<CartProps>({});

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function incrementCart(item: string) {
    const isExistingCartItem = isPresent(item, cart);
    console.log(isExistingCartItem);

    if (isExistingCartItem) {
      console.log('existing');
      setCart((prev) => ({
        ...prev,
        item: {
          ...prev.item,
          quantity: prev.item.quantity + 1,
        },
      }));
      return;
    }

    const [productPrice, productName] = getProductDetails(item);

    setCart((prev) => ({
      ...prev,
      item: {
        name: productName,
        quantity: 12,
        price: 123,
      },
    }));
  }

  return { cart, setCart, incrementCart };
}
