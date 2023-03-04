import { Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Nav from "./components/general/Nav"
import Preworkout from "./components/calculator/Preworkout"
import { Convert } from 'easy-currencies'
import Ranking from "./components/leaderboards/Ranking"
import productData from "./data/productData"
import Comparison from "./components/duel/Comparison"
import LandingPage from "./components/home/LandingPage"


function App() {

  const [conversionRates, setConversionRates] = useState({})
  const [currency, setCurrency] = useState('EUR')
  const [tab, setTab] = useState('landingPage')

  const handleTabChange = (e) => {
    setTab(e.target.value)
  } 
  
  useEffect(() => {
    Convert().from("EUR").fetch()
    .then(res => setConversionRates(res.rates))
    .catch(err => console.error(err))
  }, [])

  const handleCurrencyChange = (e) => setCurrency(e.target.value)



  return (

    <div>
      <Nav handleTabChange={handleTabChange} handleCurrencyChange={handleCurrencyChange} conversionRates={conversionRates} currency={currency} tab={tab}/>
      <Center>
      {tab == 'leaderboards' 
      ? <Ranking products={productData} conversionRates={conversionRates} currency={currency}/>
      : tab == 'calculator' 
      ? <Preworkout conversionRates={conversionRates} currency={currency}/>
      : tab == 'landingPage'
      ? <LandingPage handleTabChange={handleTabChange} />
      : tab == 'duel' ? <Comparison conversionRates={conversionRates} currency={currency}/> :
      null
    }
      
      </Center>
      
    </div>

  )
}

export default App
