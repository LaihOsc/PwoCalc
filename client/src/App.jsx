import { Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Nav from "./components/Nav"
import Preworkout from "./components/Preworkout"
import { Convert } from 'easy-currencies'
import Ranking from "./components/Ranking"
import productData from "./data/productData"
import Comparison from "./components/Comparison"
import LandingPage from "./components/LandingPage"


function App() {

  const [conversionRates, setConversionRates] = useState({})
  const [currency, setCurrency] = useState('EUR')
  const [tab, setTab] = useState('landingPage')

  const handleTabChange = (e) => setTab(e.target.value) 

  const handleCurrencyChange = (e) => setCurrency(e.target.value)

  useEffect(() => {
    Convert().from("EUR").fetch()
    .then(res => setConversionRates(res.rates))
    .catch(err => console.error(err))
    console.log(conversionRates)
  }, [])



  return (

    <div>
      <Nav handleTabChange={handleTabChange} handleCurrencyChange={handleCurrencyChange} conversionRates={conversionRates} currency={currency} tab={tab}/>
      <Center>
      {tab == 'ranking' 
      ? <Ranking products={productData} conversionRates={conversionRates} currency={currency}/>
      : tab == 'calculator' 
      ? <Preworkout conversionRates={conversionRates} currency={currency}/>
      : tab == 'landingPage'
      ? <LandingPage handleTabChange={handleTabChange} />
      : <Comparison conversionRates={conversionRates} currency={currency}/>
    }
      
      </Center>
      
    </div>

  )
}

export default App
