type Props = {
    text: string,
    classExtend?: string,
    onClick?: () => void
}

const PrimaryButton = ({text, classExtend, onClick}: Props) => {
  return (
    <div 
        onClick={onClick} 
        className={`${classExtend} rounded-[3px] py-2 cursor-pointer ease-anim px-2 justify-center text-center text-white`
        }
    >
        <p className="font-semibold">{text}</p>
    </div>
  )
}

export default PrimaryButton