import { useContext } from "react"
import { ProductsContext } from "./ProductsContext"

export default function Product({_id, name, price, image}) {
  const {selectedProducts, setSelectedProducts} = useContext(ProductsContext)

  function addProduct() {
    setSelectedProducts(prev => [...prev, _id])
  }

    return (
        <div className="w-64 h-96 text-center hover:-top-2 relative hover:shadow-2xl border rounded-xl mb-8 mt-4">
            <div className="p-5 rounded-xl">
              <img src={"/products/" + image} alt={name} className='w-64 h-48'/>
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">{name}</h3>
            </div>
            <div className="flex items-center mt-10 px-5">
              <div className="text-2xl font-thin font-bold grow">R${price}</div>
              <button onClick={addProduct} className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white h-9 py-1 px-3 rounded-xl">Adicionar</button>
            </div>
          </div>
    )
}