import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentTypesOfSliponFlange } from "./DifferentTypesOfSliponFlange";
import { AdvantagesofSlipOnFlangeDuct } from "./AdvantagesofSlipOnFlangeDuct";
import ProductsNavbar from "./ProductsNavbar";
export const SliponFlangeDuctHome = () => {
  
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
            SLIP ON FLANGE DUCT
          </Heading>
          <Text lineHeight="8" mt="20px" color="#fff">
            A slip-on flange duct is a type of ductwork that incorporates
            slip-on flanges, also known as lap joint flanges, <br></br> into its
            design. These flanges have a distinctive design with a raised
            circular collar that fits over the end of the duct.
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          <Image src="/slipon.png" alt="slipon" />
        </Box>
      </Box>
      <Box>
        <Box bg={{base:"none", lg:'#e8e4e4'}}>
        <DifferentTypesOfSliponFlange />
        <AdvantagesofSlipOnFlangeDuct />
        </Box>
        <Box>
          <Shrivedhaafooter />
        </Box>
      </Box>
    </Box>
  );
};
