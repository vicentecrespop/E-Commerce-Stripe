import FontBooter from "./Font"

export default function Videos() {
    return (
        <div className="h-full w-full bg-white relative pt-8">
            <h2 className={`text-center text-6xl sm:text-8xl text-[#333] ${FontBooter}`}>Videos</h2>
            <div className="flex flex-col items-center mt-12">
                <div className="flex justify-between items-center border border-transparent border-b-black pb-4 mb-4 uppercase text-[#555] font-extralight text-sm sm:text-lg w-11/12 md:w-2/3">
                    <span className="inline-block pr-2 w-1/6 font-bold">Oct 6 2022</span>
                    <span className="w-1/4 hidden sm:block">Vans</span>
                    <span className="w-5/12">Kilian Roth - Check</span>
                    <a href="https://www.youtube.com/watch?v=zXWHFCnOV0A" rel="noreferrer" target="_blank" className="max-w-1/5 bg-emerald-500 text-white font-bold rounded-md p-2 h-1/2 cursor-pointer">Assistir</a>
                </div>
                <div className="flex justify-between items-center border border-transparent border-b-black pb-4 mb-4 uppercase text-[#555] font-extralight text-sm sm:text-lg w-11/12 md:w-2/3">
                    <span className="inline-block pr-2 w-1/6 font-bold">Jan 7 0215</span>
                    <span className="w-1/4 hidden sm:block">CultCrew</span>
                    <span className="w-5/12">Chase Dehart - Talk is Cheap</span>
                    <a href="https://www.youtube.com/watch?v=j3uhI1z94oU" rel="noreferrer" target="_blank" className="max-w-1/5 bg-emerald-500 text-white font-bold rounded-md p-2 h-1/2 cursor-pointer">Assistir</a>
                </div>
                <div className="flex justify-between items-center border border-transparent border-b-black pb-4 mb-4 uppercase text-[#555] font-extralight text-sm sm:text-lg w-11/12 md:w-2/3">
                    <span className="inline-block pr-2 w-1/6 font-bold">Dez 24 2017</span>
                    <span className="w-1/4 hidden sm:block">United</span>
                    <span className="w-5/12">Natham Williams - Still United</span>
                    <a href="https://www.youtube.com/watch?v=nqMAoZiy0H8" rel="noreferrer" target="_blank" className="max-w-1/5 bg-emerald-500 text-white font-bold rounded-md p-2 h-1/2 cursor-pointer">Assistir</a>
                </div>
                <div className="flex justify-between items-center border border-transparent border-b-black pb-4 mb-4 uppercase text-[#555] font-extralight text-sm sm:text-lg w-11/12 md:w-2/3">
                    <span className="inline-block pr-2 w-1/6 font-bold">Dez 3 2015</span>
                    <span className="w-1/4 hidden sm:block">Deadline</span>
                    <span className="w-5/12">Garret Reynolds - Deadline</span>
                    <a href="https://www.youtube.com/watch?v=C5Ff2jpgK7o" rel="noreferrer" target="_blank" className="max-w-1/5 bg-emerald-500 text-white font-bold rounded-md p-2 h-1/2 cursor-pointer">Assistir</a>
                </div>
                <div className="flex justify-between items-center border border-transparent border-b-black pb-4 mb-4 uppercase text-[#555] font-extralight text-sm sm:text-lg w-11/12 md:w-2/3">
                    <span className="inline-block pr-2 w-1/6 font-bold">Sept 15 2016</span>
                    <span className="w-1/4 hidden sm:block">Shadow Conspiracy</span>
                    <span className="w-5/12">Simone Barraco - What Could go Wrong</span>
                    <a href="https://www.youtube.com/watch?v=rCBMWvCct10" rel="noreferrer" target="_blank" className="max-w-1/5 bg-emerald-500 text-white font-bold rounded-md p-2 h-1/2 cursor-pointer">Assistir</a>
                </div>
                <div className="flex justify-between items-center pb-4 mb-4 uppercase text-[#555] font-extralight text-sm sm:text-lg w-11/12 md:w-2/3">
                    <span className="inline-block pr-2 w-1/6 font-bold">Aug 12 2018</span>
                    <span className="w-1/4 hidden sm:block">BSD</span>
                    <span className="w-5/12">Reed Stark - BSD Transmission</span>
                    <a href="https://www.youtube.com/watch?v=l2unztfXxBc&t=200s" rel="noreferrer" target="_blank" className="max-w-1/5 bg-emerald-500 text-white font-bold rounded-md p-2 h-1/2 cursor-pointer">Assistir</a>
                </div>
            </div>
        </div>
    )
}