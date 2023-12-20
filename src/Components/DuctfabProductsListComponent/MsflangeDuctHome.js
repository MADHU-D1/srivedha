import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentTypesOfMsflangeDucts } from "./DifferentTypesOfMsflangeDuct";
import { AdvantagesofMsFlange } from "./AdvantagesofMsFlange"
import ProductsNavbar from "./ProductsNavbar";

export const MsflangeDuctHome = () => {
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
          
          <Heading color="#fff" fontFamily="poppins">
            MS - FLANGE DUCT 
          </Heading>
          <Text lineHeight="8" mt="20px" color="#fff">
            
            MS - FLANGE DUCTMS flange duct, often referred to as “Mild Steel
            flange duct,” is a type of ductwork<br></br> used in heating,
            ventilation, and air conditioning (HVAC) systems. It is constructed
            <br></br> primarily from mild steel and features flanged edges for
            ease of connection and <br></br> installation
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          
          <Image src="/Msflange.png" alt="Msflange" />
        </Box>
      </Box>
       <Box bg={{base:"none", lg:'#e8e4e4'}}>
      <DifferentTypesOfMsflangeDucts />
      <AdvantagesofMsFlange />
      </Box>
      <Box>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};
