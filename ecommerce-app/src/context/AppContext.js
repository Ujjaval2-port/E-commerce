import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl2.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 2,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas", 
      price: 70,
      image: "/images/cl28.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 3,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl41.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 4,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl38.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 5,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl37.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 6,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl32.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 7,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl27.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 8,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl20.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 9,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl14.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 10,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl22.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 11,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl6.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 12,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl10.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 13,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl18.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 14,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl34.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 15,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl44.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    },
    {
      id: 16,
      name: "Cartoon Astronaut Sports Shoes",
      brand: "Adidas",
      price: 70,
      image: "/images/cl7.jpeg",
      rating: 5,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, vero! A laborum omnis impedit saepe eveniet facilis, autem, vitae facere, ad aliquam cupiditate."
    }
  ],
  mobileMenuOpen: false
};

function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        mobileMenuOpen: !state.mobileMenuOpen
      };
    
    case 'CLOSE_MOBILE_MENU':
      return {
        ...state,
        mobileMenuOpen: false
      };
    
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const toggleMobileMenu = () => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU' });
  };

  const closeMobileMenu = () => {
    dispatch({ type: 'CLOSE_MOBILE_MENU' });
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleMobileMenu,
    closeMobileMenu,
    getCartTotal,
    getCartItemsCount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};