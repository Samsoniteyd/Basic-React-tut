import React, {useEffect, useState} from "react"
import Navbar from './Navbar';
import Main from './Main';
import CountButton from "./CountButton.js";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";

// const products = [
//   'tooth paste',
//   'tooth brush',
//   'mouth wash',
//   'dental floss',
//   'mouth guard'
// ]


function App() {
  const [productsState, setProductsState]= useState([])


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((productsArray)=>{
        const newProductsState = productsArray.map((product)=>{
          return product.title

        })
        setProductsState(newProductsState)

      })
    // setTimeout(()=>{
    //   setProductsState ([

    //     'tooth paste',
    //     'tooth brush',
    //     'mouth wash',
    //     'dental floss',
    //     'mouth guard' 
    //   ]) 
    // }, 2000)

    
  }, [])
  const hasProducts = productsState.length > 0
  return (
    <div className="App">
      {/* <header className="App-header">     
      </header> */}
      <div className="content">
      {/* <CountButton incrementBy={2} buttonColor={"blue"} borderRadius={"2px"}/>
      <CountButton incrementBy={4} buttonColor={"red"} borderRadius={"10px"}/>
      <CountButton incrementBy={6} buttonColor={"green"} borderRadius={"20px"}/> */}
      </div>
      <div>
        <SearchBar searchItems={[
  'tooth paste',
  'tooth brush',
  'mouth wash',
  'dental floss',
  'mouth guard'
]} />
        <SearchBar searchItems={[
  'bike rack',
  'mountain bike',
  'soccer ball',
  'shoe lace',
  'rain coat'
]} />
        <CountButton incrementBy={1} buttonColor="blue"/>
      
      {hasProducts ? <SearchBar searchItems={productsState}/>: "Loading..."  }
      
      <Button buttonText="myButton " />
      <Button>hello world</Button>
      <Button>hello world1</Button>
      <Button>hello world2</Button>
      <Button>hello world3</Button>
      </div>

    </div>
  );
}

export default App;
