import { useEffect, useState } from "react"
import Image from 'next/image'

interface Props{
    setCurrent: React.Dispatch<React.SetStateAction<any>>
}

const Content6 = ({setCurrent}:Props) => {

    let [edit, setEdit] = useState<string | any>('')

    useEffect(() => {
        window.scrollTo(0, 0)
        const currentStorage = localStorage.getItem("current")
        if (currentStorage) {
            setCurrent(Number(currentStorage))

            const ans6Storage = localStorage.getItem("ans6")
            setEdit(ans6Storage)
        } else {
            setCurrent(1)
        }
    }, [])

    return (
        <div className="h-[100vh]">
            <div>
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">6. ลิฟของอาคาร HB7 สามารถขึ้นได้สูงสุดชั้นที่เท่าไหร่ ?</p>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans6", e.target.value)
                }} className="w-full h-[40px] mt-[20px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="ชั้นที่"></input>
            </div>
        </div>
    )
}


export default Content6