import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/ProductsContext";
import { loadStripe } from '@stripe/stripe-js';
import Header from "../components/Header";

import FontBooter from "../components/Font";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)

export default function CheckoutPage() {
    const {selectedProducts, setSelectedProducts} = useContext(ProductsContext)
    const [productsInfo, setProductsInfo] = useState([])
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        const uniqIds = [...new Set(selectedProducts)]
        fetch('/api/products?ids='+uniqIds.join(','))
            .then(response => response.json())
            .then(json => setProductsInfo(json))
    }, [selectedProducts])

    function moreOfThisProduct(id) {
        setSelectedProducts(prev => [...prev, id])
    }

    function lessOfThisProduct(id) {
        const pos = selectedProducts.indexOf(id)
        if (pos !== -1) {
            setSelectedProducts(prev => {
                return prev.filter((value, index) => index !== pos)
            })
        }
    }

    const deliveryPrice = 5
    let subtotal = 0
    if (selectedProducts?.length) {
        for(let id of selectedProducts) {
            const price = productsInfo.find(p => p._id === id)?.price || 0
            subtotal += Number(price)
        }
    }
    const total = subtotal + deliveryPrice

    return (
        <Layout>
            <Header />
            <div className="flex flex-col bg-white relative">
                <h2 className={`text-center text-6xl mt-8 mb-8 ${FontBooter}`}>Carrinho</h2>
            <div className="flex flex-col md:flex-row justify-between p-5 relative bg-white min-h-[65vh]">
            {!selectedProducts.length && (
                <div className={`${FontBooter} text-4xl`}>Carrinho Vazio. Adicione itens ao seu carrinho.</div>
            )}
            <div className="md:w-1/2">
            <div className={selectedProducts.length ? '' : 'hidden'}>
            {selectedProducts.length && productsInfo.map(productInfo => {
                const amount = selectedProducts.filter(id => id === productInfo._id)
                if (amount === 0) return;
                return (
                    <div className="flex mb-5" key={productInfo._id}>
                        <div className="bg-gray-100 p-3 rounded-xl shrink-0">
                            <img className="w-24" src={"/products/" + productInfo.image} alt={productInfo.name}/>
                        </div>
                        <div className="pl-4">
                            <h3 className="font-bold text-lg">{productInfo.name}</h3>
                            <div>
                                <div className="grow">R${productInfo.price}</div>
                                <div>
                                    <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                                    <span className="px-2">
                                        {selectedProducts.filter(id => id === productInfo._id).length}
                                    </span>
                                    <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-emerald-500 text-white px-2 rounded-lg text-emerald-500">+</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            </div>
            <form action="/api/checkout" method="POST" className="md:w-1/2">
                <div className="mt-4">
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Nome Completo"/>
                    <input name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Endereço" />
                    <input name="city" value={city} onChange={(e) => setCity(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Cidade e CEP"/>
                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="E-mail"/>
                </div>
                <div className="mt-4">
                    <div className="flex my-3">
                        <h3 className="grow font-bold text-gray-400">Subtotal: </h3>
                        <h3 className="font-bold">R${subtotal.toFixed(2)}</h3>
                    </div>
                    <div className="flex my-3">
                        <h3 className="grow font-bold text-gray-400">Entrega: </h3>
                        <h3 className="font-bold">R${deliveryPrice}</h3>
                    </div>
                    <div className="flex my-3 border-t-2 pt-3 border-dashed border-emerald-500">
                        <h3 className="grow font-bold text-gray-400">Total: </h3>
                        <h3 className="font-bold">R${total.toFixed(2)}</h3>
                    </div>
                </div>
                <input type="hidden" name="products" value={selectedProducts.join(',')} />
                <button type="submit" className="bg-emerald-500 px-5 py-2 roundedd-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg">Pagar R${total.toFixed(2)}</button>
            </form>
            </div> 
            </div>
        </Layout>
    )
}