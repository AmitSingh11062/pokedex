import  Header  from "./components/Header"
import  PokeCard  from "./components/PokeCard"
import  SideNav  from "./components/SideNav"

import { useState } from "react"

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(true) // some reasons the  opposite
  // of what it should do (i.e when showSdieMenu it true, 
  // it actually flase)

  function  handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu() {
    setShowSideMenu(true)
  }

  return (
    <>
      <Header handleToggleMenu = {handleToggleMenu} />
      <SideNav 
      showSideMenu= {showSideMenu} 
      selectedPokemon= {selectedPokemon} 
       setSelectedPokemon= {setSelectedPokemon} 
       handleClosedMenu = {handleCloseMenu} />
      <PokeCard selectedPokemon= {selectedPokemon} />
    </>
  )
}

export default App
 