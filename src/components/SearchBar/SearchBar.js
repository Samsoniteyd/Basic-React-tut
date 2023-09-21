import React, {useState} from "react"
import "./SearchBar.css"

// const products = [
//     'tooth paste',
//     'tooth brush',
//     'mouth wash',
//     'dental floss',
//     'mouth guard'
// ]

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearClick =() => {
        setSearchValue("")

    }

    const shouldDisplayButton = searchValue.length > 0
    

    const filteredProducts= props.searchItems.filter((product)=>{
        return product.includes(searchValue)
    })
    
    return (  
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayButton && <button onClick={handleClearClick }>clear</button>}
            
            <ul>
            {filteredProducts.map((product)=>{
                return <li key={product}>{product}</li>
            })}
            </ul>
        </div>
    );
}
 
export default SearchBar;