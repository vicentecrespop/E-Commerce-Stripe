import { useState } from "react"
import Product from "../components/Product"
import { findAllProducts } from "./api/products"
import { initMongoose } from "../lib/mongoose"
import Layout from "../components/Layout"
import Header from "../components/Header"

import FontBooter from "../components/Font"

export default function Home({products}) {
  const [search, setSearch] = useState('')

  const categoriesNames = [ ...new Set(products.map(p => p.category))]

  if (search) {
    products = products.filter(p => p.name.toLowerCase().includes(search))
  } 

  return (
    <Layout className="p-5">
      <Header />
      <div className="z-10 bg-white flex flex-col items-center min-h-[77vh]">
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-100 w-1/2 m-4 py-2 px-4 rounded-xl"/>
        <div className=" mb-8">
          {categoriesNames.map(categoryName => (
            <div key={categoryName}>
              {products.find(p => p.category === categoryName) && (
                <div>
                  <h2 className={`text-5xl py-5 capitalize ${FontBooter}`}>{categoryName}</h2>
                  <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                    {products.filter(p => p.category === categoryName).map(productInfo => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product {...productInfo}/>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div> 
          ))}
        </div>
      </div>

    </Layout>
  )
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}
