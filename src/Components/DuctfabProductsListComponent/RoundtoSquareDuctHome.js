import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DiffetentTypesOfRoundDucts } from "./DifferentTypesOfRoundDuct";
import { AdvantagesOfRoundSquare } from "./AdvantagesOfRoundSquare";
import ProductsNavbar from "./ProductsNavbar";

export const RoundtoSquareDuctHome = () => {
  
  return (
    <Box>
      <Box>
        <ProductsNavbar/>
      </Box>

      <Box
        display={{ base: "flex", lg: "flex" }}
        flexDir={{ base: "column", lg: "row" }}
        w={{ base: "1100px", lg: "1400px" }}
        justifyContent={{ base: "space-around", lg: "space-around" }}
        mt={{ base: "30px", lg: "20px" }}
        bg="#0b2558"
        m={{ base: "20px", lg: "20px" }}
        borderRadius={{ base: "20px", lg: "20px" }}
      >
        <Box mt="30px" ml={{ base: "200px", lg: "0px" }}>
          
          <Heading color="#fff" fontWeight="bold" fontFamily="poppins">
            ROUND TO SQUARE DUCT
          </Heading>
          <Text lineHeight="8" mt="20px" color="#fff">
            
            Round-to-square duct transitions offer several benefits in HVAC
            Heating, Ventilation, <br></br>and Air Conditioning systems  and
            other industrial applications where different duct shapes need to be
            connected.<br></br> Here are the key benefits of using
            round-to-square duct transitions
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
        
          <Image src="/round.png" alt="round" />
        </Box>
      </Box>
      <Box>
        <Box bg={{base:"none", lg:'#e8e4e4'}}>
        <DiffetentTypesOfRoundDucts />
        <AdvantagesOfRoundSquare />
        </Box>
        <Box>
          <Shrivedhaafooter />
        </Box>
      </Box>
    </Box>
  );
};
