import { useNavigate } from 'react-router'

type Props = {}

const DummyPage = (props: Props) => {
    let navigate = useNavigate()
    console.log(navigate)

  return (
    <div>{}</div>
  )
}

export default DummyPage