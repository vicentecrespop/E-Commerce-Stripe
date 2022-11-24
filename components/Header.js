import HomeHeader from "./HomeHeader"

import { useRouter } from "next/router";
import FontBooter from "./Font";

export default function Header() {
    const router = useRouter()
    const path = router.pathname

    return (
        <header className="text-center relative bg-blue-400 grow dan-lacey">
            <div className="relative pt-5 text-white bg-black/60 flex flex-col items-center">
                <h1 className={`text-8xl sm:text-9xl pb-5 ${FontBooter}`}>AlwaysBMX</h1>
                {path === '/' ? <HomeHeader /> : null}
            </div>
        </header>
    )
}