import React from 'react'

type Props = {
    text: string,
    id: string,
    state: string,
    onClick : () => void,
}

const RadioButton = ({ text, id, state, onClick }: Props) => {
  return (
    <div onClick={onClick} className='flex gap-1.5 items-center cursor-pointer'>
        <div 
            style={{"--color" : "blue"} as React.CSSProperties} 
            className={`button ${id === state ? "bullet-active" : ""} w-4 h-4 relative rounded-full border-primary-blue border-2 bg-transparent`}
        >    
        </div>

        <div>
            <p className='text-md'>{ text }</p>
        </div>
    </div>
  )
}

export default RadioButton