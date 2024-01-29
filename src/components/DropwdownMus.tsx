import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import Biceps from './Biceps';
import Espalda from './Espalda';
import Pierna from './Pierna';
import Hombro from './Hombro';
import Pecho from './Pecho';
import Gluteo from './Gluteo';
import Triceps from './Triceps';
import Abdominal from './Abdominal';

interface DropdownMusProps {
  onSelect: (selectedOption: string) => void;
}

const componentMap: Record<string, React.FC> = {
  Biceps,
  Espalda,
  Pierna,
  Hombro,
  Pecho,
  Gluteo,
  Triceps,
  Abdominal,
};

const DropdownMus: React.FC<DropdownMusProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const SelectedComponent = componentMap[selectedOption];

  return (
    <div className="relative flex flex-col items-center w-[300px] h-[140px] rounded-lg">
        <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gray-900 text-indigo-300 p-3 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">Musculos
        {!isOpen ? (
            <AiOutlineCaretDown className="h-8 text-indigo-300" />
        ): <AiOutlineCaretUp className="h-8 text-indigo-300" />
        
        }
        </button>

        {isOpen && (
            <div className="bg-gray-900 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                <div className="flex flex-col w-full justify-between">
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3" onClick={() => handleSelectOption('Biceps')}>Biceps</option>  
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3" onClick={() => handleSelectOption('Espalda')}>Espalda</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3" onClick={() => handleSelectOption('Pierna')}>Pierna</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold
                   text-indigo-300 p-3" onClick={() => handleSelectOption('Hombro')}>Hombro</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3" onClick={() => handleSelectOption('Pecho')}>Pecho</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3" onClick={() => handleSelectOption('Gluteo')}>Gluteo</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3" onClick={() => handleSelectOption('Triceps')}>Triceps</option>
                  <option className="hover:bg-gray-800 cursor-pointer rounded-lg font-bold text-indigo-300 p-3" onClick={() => handleSelectOption('Abdominal')}>Abdominal</option>
                </div>
            </div>   
        )}

        {SelectedComponent && (
          <div className="bg-gray-950">
              <SelectedComponent />  
          </div>
        )}
    </div>
  )
}

export default DropdownMus