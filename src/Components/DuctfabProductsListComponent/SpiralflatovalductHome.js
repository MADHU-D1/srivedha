import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { Differenttypesofspiralduct } from "./Differenttypesofspiralduct";
import { AdvantagesofSpiralFlatOvalDuct } from "./AdvantagesofSpiralFlatOvalDuct";
import ProductsNavbar from "./ProductsNavbar";
export const SpiralflatovalductHome = () => {
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
            SPIRAL FLAT OVAL DUCT
          </Heading>
          <Text lineHeight="8" mt="20px" color="#fff">
            
            Spiral flat oval duct is a specialized type of ductwork used in
            heating, ventilation, and air conditioning (HVAC) <br></br> systems.
            It is distinct from standard rectangular or round ducts due to its
            unique flattened oval shape, which <br></br> provides certain
            advantages and characteristics
          </Text>
          <Box mt="10px" lineHeight="8" color="#fff">
            <Text className="style">Galvanized Iron Spiral Flat Oval Duct</Text>
            <Text className="style">Insulated Spiral Flat Oval Duct</Text>
            <Text className="style">Double-Wall Spiral Flat Oval Duct</Text>
          </Box>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          <Image src="/spiralflat.png" alt="banner" />
        </Box>
      </Box>
      <Box bg={{base:"none", lg:'#e8e4e4'}}>
      <Differenttypesofspiralduct />
      <AdvantagesofSpiralFlatOvalDuct />
      </Box>
      <Box>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};
