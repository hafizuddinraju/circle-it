// use local storage to manage cart data
const addToDb = id => {
  let shoppingCart = []

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }

  // add quantity
  const quantity = shoppingCart[id]
  if (quantity) {
    const newQuantity = quantity + 1
    shoppingCart[id] = newQuantity
  } else {
    shoppingCart[id] = 1
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
  let shoppingCart = []

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }
  return shoppingCart
}

const removeFromDb = id => {
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    

    const newData = shoppingCart.find(data => data._id === id)
    
    delete shoppingCart[newData];
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    // for(let data of shoppingCart){
    //   if(data === id){
    //     delete shoppingCart[data];
    //     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    //   }
      
    // }
    
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }
