import toast from "react-hot-toast";
//get all product from local storage
const getAllCart = () =>{
    const all = localStorage.getItem('cart')
  
   if (all){
    const cart = JSON.parse(all)
    console.log(cart);
    return cart
   }else{
    console.log([]);
    return []
   }
}

//add a product to local storage
const addCart = (product) =>{
    //get all previous saved product
    const cart = getAllCart()
    const isExist = cart.find(item =>item.id == product.id)
    if(isExist) return toast.error('Cart Successfully already exit!');

    cart.push(product)
    localStorage.setItem('cart',JSON.stringify(cart))
    toast.success('Successfully Added!');
}

//remove a product from local storage


export { addCart, getAllCart }
