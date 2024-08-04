import { useState } from "react";

export default function Home() {
    const [nevstate, setNevState] = useState(false);
    return (
        <>
            <div className='h-screen w-screen bg-slate-950 overflow-x-hidden'>
                <div className='h-12 aspect-square flex flex-col items-center justify-center gap-2 p-1 float-right m-5 cursor-pointer z-50' onClick={() => setNevState(!nevstate)}>
                    <div className={`h-1 bg-white w-[60%] self-start rounded-full ${nevstate && "rotate-45 origin-left translate-x-[6px] -translate-y-[2px]"} duration-200`}></div>
                    <div className={`h-1 bg-white w-full rounded-full ${nevstate && "-rotate-45"} duration-200`}></div>
                    <div className={`h-1 bg-white w-[60%] self-end rounded-full ${nevstate && "rotate-45 origin-right -translate-x-[6px] translate-y-[2px]"} duration-200`}></div>
                </div>

                <div className={`absolute h-[90vh] w-screen bg-gray-400 z-30 top-[10vh] left-full ${nevstate && 'left-[0%]'}`}>

                </div>
            </div>
        </>
    )
}
