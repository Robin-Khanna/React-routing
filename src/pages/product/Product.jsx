import { useParams } from "react-router-dom"

function Product() {
    const {productId} = useParams();
  return (
    <>
    <div>
        <h1>Product Details</h1>
        <h2>Product ID: {productId}</h2>
    </div>
    </>
  )
}

export default Product