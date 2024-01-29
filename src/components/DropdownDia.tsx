import { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

const DropdownDia = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex flex-col items-center w-[300px] h-[140px] rounded-lg">
        <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gray-900 text-indigo-300 p-3 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">Seleccione el día
        {!isOpen ? (
            <AiOutlineCaretDown className="h-8 text-indigo-300" />
        ): <AiOutlineCaretUp className="h-8 text-indigo-300" />
        
        }
        </button>

        {isOpen && (
            <div className="bg-gray-900 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                <div className="flex flex-col w-full justify-between">
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3">Día 1</option>  
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3">Día 2</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3">Día 3</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3">Día 4</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3">Día 5</option>
                </div>
            </div>
        )}
    </div>
  )
}

export default DropdownDia