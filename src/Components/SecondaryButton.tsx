type Props = {
  text: string,
  classExtend?: string
}

const SecondaryButton = ({ text, classExtend }: Props) => {
  return (
    <div className={`cursor-pointer inline-block text-gray-600 ${classExtend}`}>
      <p
        className="secondary-button bg-clip-text relative px-2 py-1 transition-all duration-500 bg-[length:200%_100%]"
      >
        {text}
      </p>
    </div>
  )
}

export default SecondaryButton
