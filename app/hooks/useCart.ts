import { useState, useEffect } from 'react';
import data from '../../data.json';

type ProductDetails = {
  quantity: number;
  price: number;
};

interface CartProps {
  [name: string]: ProductDetails;
}

// Helper functions
function getProductDetails(name: string): [number, string] {
  const productData = data.find((product) => {
    return name === product.slug;
  });
  return [productData!.price, productData!.slug];
}

function isPresent(name: string, cart: CartProps) {
  return cart[name];
}

// Hook function
export default function useCart() {
  const [cart, setCart] = useState<CartProps>({});

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function incrementProduct(product: string) {
    const isExistingCartItem = isPresent(product, cart);

    if (isExistingCartItem) {
      setCart((prev) => ({
        ...prev,
        [product]: {
          ...prev[product],
          quantity: prev[product].quantity + 1,
        },
      }));
      return;
    }

    const [productPrice, productName] = getProductDetails(product);
    setCart((prev) => ({
      ...prev,
      [productName]: {
        quantity: 1,
        price: productPrice,
      },
    }));
  }

  function decrementProduct(product: string) {
    const isExistingCartItem = isPresent(product, cart);

    if (isExistingCartItem) {
      if (cart[product].quantity > 1) {
        setCart((prev) => ({
          [product]: {
            ...prev[product],
            quantity: prev[product].quantity - 1,
          },
        }));
      } else {
        setCart(() => {
          const tempCart = { ...cart };
          delete tempCart[product];
          return tempCart;
        });
      }
    }
  }

  return { cart, setCart, incrementProduct, decrementProduct };
}
