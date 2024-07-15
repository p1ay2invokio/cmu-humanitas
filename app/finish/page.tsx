'use client'

import {useRouter} from 'next/navigation'

const Finish = () => {

    const navigate = useRouter()

    return (
        <div className="w-full flex justify-center flex-col items-center">
            <div className="w-full h-[80vh] flex justify-center items-center">
                <img className="w-[300px]" src="/finish.png"></img>
            </div>
            <div onClick={()=>{
                navigate.push("/")
            }} className="flex justify-center items-center w-[150px] h-[40px] bg-purple-400 rounded-[8px] font-[medium] text-white">
                <p>กลับสู่หน้าหลัก</p>
            </div>
        </div>
    )
}

export default Finish