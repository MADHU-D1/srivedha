import { useState } from "react";
import Contact from "./Contact";
import {
  Text,
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Heading,
  
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AutocomleteProducts from "../AutocompletProducts/AutocomleteProducts";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";

function Contactnavbar() {
  const [showCard, setShowCard] = useState(false);

  const handleMouseEnter = () => {
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
  };

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
      <Box   pl={{ base: "80px", lg: "80px" }}>
      <Heading
      
      fontSize={{ base: "40px", lg: "50px" }}
       // mb={{ base: "-10px", lg: "24px" }}
        color="#0b2558"
        pt={{base:"25px", lg:"0px"}}
        fontFamily='poppins'
      >
        SHRI<span style={{ marginLeft: "15px" }}>VEDAA</span>
      </Heading>
      <Box pt={{base:"0px",lg:"0px"}} ml="5px" color="#1399f0" position="absolute" zIndex="100" >
        <Text fontSize={{base:"14px", lg:"20px"}} >
          
          Engineering
          <span style={{ marginLeft: "10px" }}>Technologies</span>
        </Text>
      </Box>
    </Box>
        <GridItem>
          <Box
          color="#fff"
          bg="#0b2558"
          borderRadius="0px 0px 130px 0px"
          w={{ base: "630px", lg: "800px" }}
          ml={{ base: "170px", lg: "50px" }}
          h={{ base: "470px", lg: "550px" }}
          >
          <Box display='flex' flexDir='row' justifyContent='space-around' pt="34px" pr="50px" >

              <Box
                // p={{ base: "18px", lg: "32px" }}
                // mt={{ base: "2px", lg: "10px" }}
                fontWeight="bold"
                className="menuItem"
              >
                <Link to="/">
                  <Text className="hover">HOME</Text>
                </Link>
              </Box>
              <Box
                // p={{ base: "18px", lg: "32px" }}
                // mt={{ base: "4px", lg: "10px" }}
                className="menuItem"
                fontWeight="bold"
              >
                <Link to="/aboutus">
                  <Text>ABOUT US</Text>
                </Link>
              </Box>
              <Box
                // p={{ base: "18px", lg: "32px" }}
                // mt={{ base: "4px", lg: "10px" }}
                className="menuItem"
                fontWeight="bold"
              >
                <Link to="/projects">
                  <Text>PROJECTS</Text>
                </Link>
              </Box>
              <Box
                // p={{ base: "18px", lg: "32px" }}
                // mt={{ base: "4px", lg: "10px" }}
                className="menuItem"
                fontWeight="bold"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/products">
                  <Text className="hover">PRODUCTS</Text>
                </Link>
                {showCard && <AutocomleteProducts />}
              </Box>
              <Box
                // p={{ base: "18px", lg: "32px" }}
                // mt={{ base: "4px", lg: "10px" }}
                className="menuItem"
                fontWeight="bold"
              >
                <Link to="/contactus">
                  <Text className="hover">CONTACT US</Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Box
      display="felx"
      className="tracking-in-expand-fwd-top"
      mt={{ base: "-370px", lg: "-450px" }}
      mr={{ base: "90px", lg: "180px" }}
      w={{ base: "1000px", lg: "1380px" }}
      ml={{ base: "30px", lg: "50px" }}
      >
        <Image src="/banner.png" alt="banner" />
      </Box>
      <Contact />
    <Box mt={{base:"80px", lg:"0px"}}>
    <Shrivedhaafooter/>
    </Box>
    </Box>
  );
}

export default Contactnavbar;
