import { Box, Center, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Nav from "./components/general/Nav"
import Preworkout from "./components/calculator/Preworkout"
import { Convert } from 'easy-currencies'
import Ranking from "./components/leaderboards/Ranking"
import productData from "./data/productData"
import Comparison from "./components/duel/Comparison"
import LandingPage from "./components/home/LandingPage"
import Footer from "./components/general/Footer"
import { Route, Routes } from "react-router-dom"
import Form from "./components/form/Form"
import FormPage from "./components/form/FormPage"


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

    <>
      <Flex justifyItems={"center"} flexDir={'column'} minH={'100vh'} minW={'100vh'}>
      <Nav handleTabChange={handleTabChange} handleCurrencyChange={handleCurrencyChange} conversionRates={conversionRates} currency={currency} tab={tab}/>
      <Center alignSelf={'center'} pb={20} w={[1, 1/2, 1/4]}>
      
      <Routes>
        <Route path="/" element={<LandingPage handleTabChange={handleTabChange} />}></Route>
        <Route path="/ranking" element={<Ranking products={productData} conversionRates={conversionRates} currency={currency} />}></Route>
        <Route path="/duel" element={<Comparison conversionRates={conversionRates} currency={currency} />}></Route>
        <Route path="/calculator" element={<Preworkout conversionRates={conversionRates} currency={currency} />}></Route>
        <Route path="/submit" element={<FormPage conversionRates={conversionRates} handleTabChange={handleTabChange} />}></Route>
        {/* <Route path="/calculator" element={<Preworkout conversionRates={conversionRates} currency={currency} />}></Route> */}
      </Routes>
      
      </Center>
      <Footer />
      </Flex>
    </>

  )
}

export default App
