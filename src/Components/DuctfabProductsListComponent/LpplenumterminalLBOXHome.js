import { Box, Heading,Text,Image, Button, Center } from '@chakra-ui/react'
import React from 'react'

import Shrivedhaafooter from '../Shrivedhadashbord/Shrivedhaafooter'

import {DifferentTypesOfLpplenumterminal} from './DifferentTypesOfLpplenumterminal'
import {AdvantagesofLpPlenumTerminalbox} from './Advantagesof LpPlenumTerminalbox'
import ProductsNavbar from './ProductsNavbar'
export const LpplenumterminalBoxHome = () => {
  
  return (
    <Box>
        <Box>
         <ProductsNavbar/>
        </Box>

        <Box  display={{base:'flex',lg:'flex'}} flexDir={{base:'column',lg:'row'}} w={{base:"1100px",lg:"1400px"}} justifyContent={{base:'space-around',lg:'space-around'}} mt={{base:'30px',lg:'20px'}} bg="#0b2558" m={{base:"20px",lg:"20px"}} borderRadius={{base:'20px',lg:'20px'}}>          
        <Box mt='30px' ml={{base:"200px",lg:"0px"}}>
             <Heading color='#fff' fontFamily='poppins'>LP PLENUM / TERMINAL BOX</Heading>
             <Text lineHeight="8" mt="20px" color='#fff'>
             An LP Plenum (Low-Pressure Plenum) or Terminal Box is an essential component in HVAC <br></br> (Heating, Ventilation, and Air Conditioning) systems.  It serves as a critical junction point in the  <br></br> ductwork and offers several benefits in HVAC applications.</Text>
           </Box>
           <Box ml={{base:"200px",lg:"0px"}} h="300px" w='350px' mt="40px">           <Image src="/plenum.png" alt="plenum" />
           </Box>
           
        </Box>
          <Box>
            <Box bg={{base:"none", lg:'#e8e4e4'}}>
             <DifferentTypesOfLpplenumterminal/>
             <AdvantagesofLpPlenumTerminalbox/>
             </Box>
             <Box>
               <Shrivedhaafooter/>
             </Box>
          </Box>
    </Box>
  
  )
}
