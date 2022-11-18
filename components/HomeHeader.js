export default function HomeHeader() {
    return (
        <>
            <div className="mt-14 mb-10">
                        <a href="https://www.youtube.com/watch?v=zXWHFCnOV0A" rel="noreferrer" target="_blank"
                            className="border border-2 border-emerald-500 px-12 py-3 text-2xl font-light hover:bg-black/60">
                            Watch the latest video
                        </a>
            </div>
            <a href="https://www.youtube.com/watch?v=zXWHFCnOV0A" rel="noreferrer" target="_blank" className="hover:text-emerald-500 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
            </a>
        </>
    )
}