import { Box, Heading, Text } from "@chakra-ui/react";

import { useState, useEffect } from "react";

function Achievements() {
  const [value, setValue] = useState(0);
  const [experience, setExperience] = useState(0);
  const [trustedPartners, setTrustedPartners] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= 1700) {
          clearInterval(intervalId);
          return 10000;
        }
        return prevValue + 1;
      });
    }, 0.5);

   
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExperience((prevValue) => {
        if (prevValue >= 20) {
          clearInterval(intervalId);
          return 20;
        }
        return prevValue + 1;
      });
    }, 100);

    
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrustedPartners((prevValue) => {
        if (prevValue >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevValue + 1;
      });
    }, 105);

    
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProducts((prevValue) => {
        if (prevValue >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevValue + 1;
      });
    }, 105);

   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box>
      <Box mr={{base:"-580px", lg:"0px"}}>
        <Heading   color='#ff5722' textAlign={{base:"center", lg:"center"}} fontSize="40px" fontFamily='poppins'>ACHIEVMETS</Heading>
      </Box>
      <Box ml={{base:'500px', lg:'0px'}}  display="flex" flexDir={{base:"row", lg:"row"}} justifyContent={{base:"center", lg:"space-around"}}  >
        <Box boxShadow="base" p="6" rounded="md"  m={{base:'30px', lg:'0px'}}>
          <Box boxShadow="base" p="6" rounded="md" bg="white" m="5px" borderTop='solid #ff5722 3px'>
            <Text fontSize="30px">Successful Projects: {value} +</Text>
          </Box>
          <Box boxShadow="base" p="6" rounded="md" bg="white" m="5px" borderTop='solid #ff5722 3px'>
           
            <Text fontSize="30px">Trusted Partners: {trustedPartners} +</Text>
          </Box>
        </Box>
        <Box boxShadow="base" p="6" rounded="md" pr={{base:"0px", lg:"66px"}}  m={{base:'30px', lg:'0px'}}>
          <Box boxShadow="base" p="6" rounded="md" bg="white" m="5px" borderTop='solid #ff5722 3px'>
            
            <Text fontSize="30px">Years of Experience: {experience} +</Text>
          </Box>
          <Box boxShadow="base" p="6" rounded="md" bg="white" m="5px" borderTop='solid #ff5722 3px'>
            <Text fontSize="30px">Products: {products} +</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Achievements;
