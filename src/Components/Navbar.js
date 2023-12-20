import React, { useState, useEffect } from "react";
import { Text, Box, Grid, GridItem, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../App.css";
import AutocomleteProducts from "./AutocompletProducts/AutocomleteProducts"
import Loginform from "./Contactuscomponent/Loginform";


function Navbar() {
  const [showCard, setShowCard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    //'/banner.png',
    "/Ductfabhomenavimage.jpg",
    "/DuctingHomeNaveimg5.jpg",
    //"/DuctingHomeNaveimg19.jpg",
    
    "/DuctingHomeNaveimg9.JPG",
    //"/DuctingHomeNaveimg18.jpg",
  ];
  const intervalDuration = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, );

  const handleMouseEnter = () => {
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
  };

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <Box pl={{ base: "80px", lg: "80px" }}>
          <Heading
            fontSize={{ base: "40px", lg: "50px" }}
            color="#0b2558"
            pt={{ base: "25px", lg: "0px" }}
            fontFamily="poppins"
          >
            SHRI<span style={{ marginLeft: "15px" }}>VEDAA</span>
          </Heading>
          <Box
            pt={{ base: "0px", lg: "0px" }}
            ml="5px"
            color="#1399f0"
            position="absolute"
            zIndex="100"
          >
            <Text fontSize={{ base: "14px", lg: "20px" }}>
              Engineering
              <span style={{ marginLeft: "10px" }}>Technologies</span>
            </Text>
          </Box>
        </Box>
        <GridItem>
          <Box
            //color="#fff"
            bg="#e8e4e4"
            borderRadius={{base:"0px 0px 130px 0px",lg:"0px"}}
            w={{ base: "630px", lg: "800px" }}
            ml={{ base: "170px", lg: "0px" }}
            h={{ base: "470px", lg: "100px" }}
          >
            <Box
              display="flex"
              flexDir="row"
              justifyContent="space-around"
              pt="34px"
              pr="50px"
             color='#0b2558'
             // boxShadow='inner' rounded='md' bg='white'
            >
              <Box fontWeight="bold" className="menuItem">
                <Link to="/">
                  <Text className="hover">HOME</Text>
                </Link>
              </Box>
              <Box fontWeight="bold" className="menuItem">
                <Link to="/aboutus">
                  <Text>ABOUT US</Text>
                </Link>
              </Box>
              <Box fontWeight="bold" className="menuItem">
                <Link to="/projects">
                  <Text>PROJECTS</Text>
                </Link>
              </Box>
              <Box
                fontWeight="bold"
                className="menuItem"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/products">
                  <Text>PRODUCTS </Text>
                </Link>
                {showCard && <AutocomleteProducts />}
              </Box>
              <Box fontWeight="bold" className="menuItem">
                <Link to="/contactus">
                  <Text className="hover">CONTACT US</Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Box
   
        display={{ base: "flex", lg: "flex" }}
        className="tracking-in-expand-fwd-top"
        mt={{ base: "-370px", lg: " 0px" }}
        h={{ base: "500px", lg: "550px" }}
        w={{ base: "1050px",  lg: "1440px" }}
        ml={{ base: "20px", lg: "2px" }}
        overflow="hidden" 
        position="relative" 
      >
        {images.map((image, index) => (
          <Image
            key={index}
            className="images"
            //className={`images ${index === currentImageIndex ? "active" : ""}`}
            src={image}
            alt={`banner-${index}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 2.5s ease-in-out",
            }}
          />
        ))}
       
      </Box>
    </Box>
  );
}

export default Navbar;

















