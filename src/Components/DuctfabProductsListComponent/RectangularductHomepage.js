import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";

import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentTypesofrectangularducts } from "./DifferentTypesofrectangularducts";
import { AdvantagesofRectangularDuct } from "./AdvantagesofRectangularDuct";
import ProductsNavbar from "./ProductsNavbar";
export const RectangularductHomepage = () => {
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
            RECTANGULAR DUCT
          </Heading>
          <Text lineHeight="8" mt="20px" color="#fff">
            Rectangular ducts are commonly used in heating, ventilation, and air
            conditioning (HVAC) systems. <br></br> They offer several features
            and benefits that make them a popular choice for various
            applications
          </Text>
          <Box mt="10px" color="#fff" lineHeight="8">
            <Text className="style">Galvanized Iron Rectangular Duct</Text>
            <Text className="style">Insulated Rectangular Duct</Text>
            <Text className="style">Aluminum Rectangular Duct</Text>
            <Text className="style">Stainless Steel Rectangular Duct</Text>
          </Box>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          <Image src="rectangle.png" alt="rectangle" />
        </Box>
      </Box>
      <Box bg={{base:"none", lg:'#e8e4e4'}}>
      <DifferentTypesofrectangularducts />
      <AdvantagesofRectangularDuct />
      </Box>
      <Box>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};
