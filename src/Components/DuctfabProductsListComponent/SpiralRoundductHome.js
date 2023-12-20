import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
//import { DifferentTypesofrectangularducts } from './DifferentTypesofrectangularducts'
import { DifferentTypesofSpiralRound } from "./DifferentTypesofSpiralRound";
import { AdvantagesofspiralRoundDucts } from "./AdvantagesofspiralRoundDucts";
import ProjectsNavbar from "../Projectscomponent/ProjectsNavbar";
import ProductsNavbar from "./ProductsNavbar";
export const SpiralRoundductHome = () => {
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
          SPIRAL ROUND DUCT
          </Heading>
          <Text lineHeight="8" mt="20px" color="#fff">
            
          A spiral round duct is a type of ductwork used in heating,
          ventilation, and air conditioning (HVAC) systems.<br></br> It is
          characterized by its cylindrical shape and spiral- seam
          construction. Spiral round ducts offer <br></br>several features and
          benefits
          </Text>
          <Box mt="10px" lineHeight="8" color="#fff">
            <Text className="style">Galvanized Iron</Text>
            <Text className="style">Insulated Duct</Text>
            <Text className="style">Double Wall Duct</Text>
          </Box>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          <Image src="/spiralflat.png" alt="banner" />
        </Box>
      </Box>
       <Box bg={{base:"none", lg:'#e8e4e4'}}>
      <DifferentTypesofSpiralRound />
      <AdvantagesofspiralRoundDucts />
      </Box>
      <Box>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};

