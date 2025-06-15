type Props = {
  text: string,
  classExtend?: string
}

const SecondaryButton = ({ text, classExtend }: Props) => {
  return (
    <div className={`cursor-pointer inline-block content-center text-gray-500 border-[1px] rounded-[5px] px-4 py-2 ${classExtend}`}>
      <p
        className="relative text-center align-center"
      >
        {text}
      </p>
    </div>
  )
}

export default SecondaryButton
