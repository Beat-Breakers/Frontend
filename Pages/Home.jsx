import { useState } from "react";
import {Link} from 'react-router-dom';
export default function Home() {
    const [nevstate, setNevState] = useState(false);
    return (
        <>
            <div className='h-screen w-screen bg-slate-950 overflow-hidden relative'>
                <div className='h-12 aspect-square flex flex-col items-center justify-center gap-2 p-1 m-5 cursor-pointer z-50 float-right' onClick={() => setNevState(!nevstate)}>
                    <div className={`h-1 bg-white w-[60%] self-start rounded-full ${nevstate && "rotate-45 origin-left translate-x-[6px] -translate-y-[2px]"} duration-200`}></div>
                    <div className={`h-1 bg-white w-full rounded-full ${nevstate && "-rotate-45"} duration-200`}></div>
                    <div className={`h-1 bg-white w-[60%] self-end rounded-full ${nevstate && "rotate-45 origin-right -translate-x-[6px] translate-y-[2px]"} duration-200`}></div>
                </div>

                <div className={`absolute h-[90vh] w-screen bg-gray-400 z-30 top-[10vh] flex flex-col items-center justify-center gap-5 px-20 ${nevstate && 'left-0'} ${!nevstate && 'left-full'} duration-500`}>
                    <Link to={'/'} className="nev_item">Home</Link>
                    <Link to={'/'} className="nev_item">Home</Link>
                    <Link to={'/'} className="nev_item">Home</Link>
                    <Link to={'/'} className="nev_item">Home</Link>
                </div>
            </div>
        </>
    )
}
