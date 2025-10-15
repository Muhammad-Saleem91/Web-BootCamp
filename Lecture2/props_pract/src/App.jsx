import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChildComponent from './Child.jsx'
import ProductComponent from './Product.jsx'
import { productData } from './data.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello World
        <ChildComponent title="Card Title" description="Card Description" />
        <br />
        <ChildComponent title="Wadiwala Motors" description="Wadiwala Motors Description" />
        <br />

        {productData.map((product) => (
          <ProductComponent key={product.id} title={product.name} description={product.description} imageUrl={product.imageUrl} price={product.price} />
        ))}

      

      </div>
    </>
  )
}

export default App
