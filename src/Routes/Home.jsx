import axios from 'axios'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
    const { state } = useContextGlobal();

  return (
    <div className={'home '+ (!state.theme ? "dark" : "white") }>
        {state.list?.map((char , id) => (
            <Card key={id} char= {char}/>
        ))}
    </div>
  )
}

export default Home