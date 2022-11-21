import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./ProductsContext";

export default function Layout({children}) {
    const [success, setSuccess] = useState(false)
    const {setSelectedProducts} = useContext(ProductsContext)
    useEffect(() => {
        if(window.location.href.includes('success')) {
            setSelectedProducts([])
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 4000)
        }
    }, [])

    return (
        <div className="border border-black min-h-screen flex flex-col">
            <div className="grow flex flex-col">
                {success && (
                    <div className="relative z-50 text-center bg-green-400 text-white text-lg p-5">
                        Obrigado pela compra! :)
                    </div>
                )}
                {children}
            </div>
            <Footer />
        </div>
    )
}