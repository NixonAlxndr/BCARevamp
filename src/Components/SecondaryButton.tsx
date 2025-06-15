type Props = {
  text: string,
  classExtend?: string,
  onClick?: any
}

const SecondaryButton = ({ text, classExtend, onClick }: Props) => {
  return (
    <div onClick={onClick} className={`cursor-pointer inline-block content-center text-gray-500 border-[1px] rounded-[5px] px-4 py-2 ${classExtend}`}>
      <p
        className="relative text-center align-center"
      >
        {text}
      </p>
    </div>
  )
}

export default SecondaryButton
