import { useState, createContext } from 'react'

export const UserContext = createContext({})

export default function StoreProvider({children}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <UserContext.Provider value={{menuIsOpen, setMenuIsOpen}}>
      {children}
    </UserContext.Provider>
  )
}
