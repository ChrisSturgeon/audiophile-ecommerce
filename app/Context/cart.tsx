'use client';
import data from '../../data.json';
import { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  quantity: number;
  price: number;
  name: string;
  thumbnail: string;
}

interface CartProps {
  [key: string]: CartItem;
}

interface ContextProps {
  cart: CartProps;
  totalCartItems: number;
  addProductWithQuantity: Function;
  incrementProduct: Function;
  decrementProduct: Function;
  emptyCart: () => void;
  getCartTotalPrice: () => number;
}

const GlobalContext = createContext<ContextProps>({
  cart: {},
  totalCartItems: 0,
  addProductWithQuantity: () => null,
  incrementProduct: (): null => null,
  decrementProduct: (): null => null,
  emptyCart: (): null => null,
  getCartTotalPrice: (): number => 0,
});

// Helper functions
function getProductDetails(name: string): [number, string, string, string] {
  const productData = data.find((product) => {
    return name === product.slug;
  });
  return [
    productData!.price,
    productData!.slug,
    productData!.name,
    productData!.categoryImage.mobile,
  ];
}

function isPresent(name: string, cart: CartProps) {
  return cart[name];
}

function getLocalStorageCart() {
  if (typeof window !== 'undefined') {
    const previousCart = localStorage.getItem('cart');

    if (previousCart) {
      return JSON.parse(previousCart);
    }
  }
  return {};
}

function updateLocalStorageCart(cart: CartProps) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// TODO - fix Type of Children
export const GlobalContextProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState<CartProps>(getLocalStorageCart());
  const [totalCartItems, setTotalCartItems] = useState(0);

  // Update local storage clone of cart on change
  useEffect(() => {
    updateLocalStorageCart(cart);
  }, [cart]);

  // Sums number of items in cart and updates count in state
  useEffect(() => {
    let totalCartItems = 0;

    for (const item in cart) {
      totalCartItems += cart[item].quantity;
    }

    setTotalCartItems(totalCartItems);
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

    const [price, slug, name, thumbnail] = getProductDetails(product);
    setCart((prev) => ({
      ...prev,
      [slug]: {
        quantity: quantity,
        price: price,
        name: name,
        thumbnail: thumbnail,
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

    const [price, slug, name, thumbnail] = getProductDetails(product);
    setCart((prev) => ({
      ...prev,
      [slug]: {
        quantity: 1,
        price: price,
        name: name,
        thumbnail: thumbnail,
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

  function emptyCart() {
    setCart({});
  }

  function getCartTotalPrice() {
    const items = Object.keys(cart);
    let total = 0;

    return items.reduce(
      (total, item) => total + cart[item].price * cart[item].quantity,
      total
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        cart,
        totalCartItems,
        addProductWithQuantity,
        incrementProduct,
        decrementProduct,
        emptyCart,
        getCartTotalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
