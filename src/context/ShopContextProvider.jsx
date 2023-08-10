import {createContext} from 'react'


export const ShopContext  = createContext(null)

const ShopContextProvider = (props) => {
  const [cartItems]


  return (
    <ShopContext.Provider>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider