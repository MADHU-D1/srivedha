import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentMaterialsOvalvcd } from "./DifferentMaterialsOvalvcd";
import { AdvantagesofOvalVcd } from "./AdvantagesofOvalVcd";
import ProductsNavbar from "./ProductsNavbar";
export const OvalvcdHome = () => {
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
            OVAL VCD
          </Heading>
          <Text lineHeight="8" mt="20px" color="#fff">
            An Oval Volume Control Damper (VCD) is a specialized component used
            in heating, ventilation, and air <br></br> conditioning (HVAC)
            systems to regulate or control the flow of air within ductwork.<br></br> 
            Unlike traditional rectangular or square dampers, oval
            VCDs have an oval-shaped frame and blades
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
        
          <Image src="/ovalvcd.png" alt="ovalvcd" />
        </Box>
      </Box>
      <Box>
        <Box bg={{base:"none", lg:'#e8e4e4'}}>
        <DifferentMaterialsOvalvcd />
        <AdvantagesofOvalVcd />
        </Box>
        <Box>
          <Shrivedhaafooter />
        </Box>
      </Box>
    </Box>
  );
};
