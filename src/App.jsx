import { useState } from 'react'
import './App.css'
import Title from './component/Title'
import { useEffect } from 'react'
function App() {

  const [products, setProduct] =useState([])
  const [orederProduct, setOrderProduct] = useState([])

  useEffect(()=>{
    fetch('product.json')
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])
  // console.log(products);

const handleAddToCart=(book)=>{
const cartId = orederProduct.find(product => product.id === book)
console.log(cartId);
if (cartId) {
  return 
}
const cartData = products.find(cart => cart.id ==book)
setOrderProduct([...orederProduct, cartData]);
}
  return (
   <div>
    <Title></Title>
    <div className='flex justify-between'>
      <div className='grid grid-cols-3'>
      {
      products.map(product =>{
        // console.log(product);
        const {name, image, originalPrice, discountPrice, rating } = product
        return(
          <div className='' key={product.id}>
            <div className=" w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} className="rounded-xl h-48 w-48" />
          </figure>
          <div className="px-16 p-2 space-y-2">
            <h1>{name}</h1>
            <div className='flex gap-4'>
              <p><s>{originalPrice} tk</s></p>
              <p>{discountPrice} tk</p>
            </div>
            <h1>rating: {rating}</h1>
            <button onClick={()=>handleAddToCart(product.id)} className='bg-blue-400 px-4 py-2 rounded-xl pl-3 text-white font-semibold'>Add to cart</button>
          </div>
          
        </div>
          </div>
        )
      })
    }
     
 </div>
      <div className="lg:w-[20%] w-full h-[100vh] mr-10 overflow-y-auto sticky top-3">
          <p className="text-center text-3xl">Total Cart Item</p>
          <p className="text-center p-3" id="totalPriceDisplay"></p>
          <div id="cartContainer" className="cartContainer ">
            <table className="table-auto border w-full text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                    {
                      orederProduct.map(cart =>{
                        const { name,  discountPrice  } = cart
                        return(
                          <tr key={name} >
                          <td >{name}</td>
                        <td>{discountPrice} tk</td>
                      </tr>
                        )
                        
                      })
                    }
              </tbody>
            </table>
          </div>
        </div>
    </div>

   </div>
  )
}

export default App
