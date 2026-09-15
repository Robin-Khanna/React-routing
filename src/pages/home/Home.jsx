import { Link } from "react-router-dom"
function Home() {
  return (
    <>
    <div className="box">
        <h1>Phone</h1>
        <Link to='product/15'>I phone 15</Link>
    </div>
    <div className="box">
        <h1>Phone</h1>
        <Link to='product/16'>I phone 16</Link>
    </div>
    <div className="box">
        <h1>Phone</h1>
        <Link to='product/17'>I phone 17</Link>
    </div>
    <div className="box">
        <h1>Phone</h1>
        <Link to='product/18'>I phone 18</Link>
    </div>
    </>
  )
}

export default Home