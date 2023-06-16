'use client';
import data from '../../data.json';

import { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  quantity: number;
  price: number;
}

interface CartProps {
  [key: string]: CartItem;
}

interface ContextProps {
  cart: CartProps;
  addProductWithQuantity: Function;
  incrementProduct: Function;
  decrementProduct: Function;
}

const GlobalContext = createContext<ContextProps>({
  cart: {},
  addProductWithQuantity: () => null,
  incrementProduct: (): null => null,
  decrementProduct: (): null => null,
});

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
// TODO - fix Type of Children
export const GlobalContextProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState<CartProps>({});

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function addProductWithQuantity(product: string, quantity: number) {
    const isExistingCartItem = isPresent(product, cart);

    if (isExistingCartItem) {
      setCart((prev) => ({
        ...prev,
        [product]: {
          ...prev[product],
          quantity: prev[product].quantity + quantity,
        },
      }));
      return;
    }

    const [productPrice, productName] = getProductDetails(product);
    setCart((prev) => ({
      ...prev,
      [productName]: {
        quantity: quantity,
        price: productPrice,
      },
    }));
  }

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

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addProductWithQuantity,
        incrementProduct,
        decrementProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
