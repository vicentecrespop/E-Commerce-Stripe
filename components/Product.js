import { useContext } from "react"
import { ProductsContext } from "./ProductsContext"

export default function Product({_id, name, price, image}) {
  const {selectedProducts, setSelectedProducts} = useContext(ProductsContext)

  function addProduct() {
    setSelectedProducts(prev => [...prev, _id])
  }

    return (
        <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src={"/products/" + image} alt={name} />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">{name}</h3>
            </div>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">R${price}</div>
              <button onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">add to cart</button>
            </div>
          </div>
    )
}