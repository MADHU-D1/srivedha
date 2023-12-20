import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import "./DifferentTypesOffab.css";

const content = [
  [
    <Box
      position="absolute"
      zIndex="170"
     // bg={{ base: "none", lg: "#bad9fc" }}
      w={{ base: "200%", lg: "65%" }}
     // borderRadius="10px"
     
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "340px", lg: "40px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Box>
            <Box>
              <Text>
                <span className="material">Material </span>Galvanized iron
                spiral round ducts are typically made from galvanized steel
                sheets, formed into a cylindrical shape with spiral-seam
                construction.
              </Text>
            </Box>
            <li className="material">Advantages</li>
          </Box>
          <Box>
            <Text>
              Corrosion Resistance The zinc coating provides excellent
              protection against rust and corrosion.
            </Text>
            <Text>
              Durability Galvanized iron is known for its strength and
              durability, ensuring a long service life.
            </Text>
            <Text>
              Cost-Effective It is generally more affordable than some other
              materials.
            </Text>
            <Text>
              Space-Efficient Round ducts are space-efficient, making them
              suitable for installations with limited space.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
     // bg={{ base: "none", lg: "#bad9fc" }}
      w={{ base: "200%", lg: "65%" }}
     // borderRadius="10px"
      
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "360px", lg: "40px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Box>
            <Text>
              <span className="material">Material</span>Insulated spiral round
              ducts typically consist of an inner duct made from materials like
              galvanized iron or aluminum and include an insulation layer within
              the duct.
            </Text>
            <li className="material">Advantages</li>
          </Box>
          <Box>
            <Text>
              Thermal Insulation The insulation layer helps maintain consistent
              temperatures and prevents condensation within the duct, making
              <br></br> it suitable for both heating and cooling applications.
            </Text>
            <Text>
              Energy Efficiency Insulated ducts reduce heat loss or gain,
              improving overall HVAC system efficiency.
            </Text>
            <Text>
              Noise Reduction The insulation layer can provide sound
              attenuation, reducing noise transmission through the duct system.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "180%", lg: "65%" }}
      //bg={{ base: "none", lg: "#bad9fc" }}
     // borderRadius="10px"
     
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "380px", lg: "40px" }}
    >
      <Box
        display="flex"
        flexDir={{ base: "row", lg: "row" }}
        justifyContent="center"
        boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'
      >
        <Box ml='10px'>
          <Box>
            <Text>
              <span className="material">Material</span>Double-wall spiral round
              ducts feature an inner duct and an outer shell, often both made
              from materials like galvanized <br></br> iron or other metals.
            </Text>
            <li className="material">Advantages</li>
          </Box>
          <Box>
            <Text>
              Airtight Construction Double-wall ducts minimize air leakage,
              ensuring conditioned air remains inside the duct and <br></br>
              improving energy efficiency.
            </Text>
            <Text>
              Durability The dual layers offer added strength and protection,
              making them suitable for demanding applications.
            </Text>
            <Text>
              Noise Reduction The double-wall design can provide noise reduction
              benefits, contributing to quieter HVAC operation.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
];

export const DifferentTypesofSpiralRound = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <Box
      display={{ base: "flex ", lg: "flex" }}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "center" }}
      alignItems={{ base: "center", lg: "center" }}
    >
      <Box>
        <Box>
          <Box>
            <Box mr={{ base: "-740px", lg: "0px" }}>
              <Heading textAlign="center" fontFamily="poppins" fontSize='30px'>
                DIFFERENT MATERIALS OF SPIRAL ROUND DUCT AND THERE BENEFITS
              </Heading>
            </Box>
          </Box>
        </Box>

        <Box
          mt="4"
          alignItems={{ base: "center", lg: "center" }}
          justifyContent={{ base: "center", lg: "center" }}
        >
          <Box
            display={{ base: "flex", lg: "flex" }}
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "center" }}
          >
            <Box p={{ base: "24px", lg: "10px" }}>
              <Button
                w={{ base: "100%", lg: "none" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 0 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                Galvanized Iron Spiral Round Duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "10px" }}>
              <Button
                w={{ base: "100%", lg: "none" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 1 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                Insulated Spiral Round Duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "10px" }}>
              <Button
                w={{ base: "100%", lg: "none" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 2 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                Double-Wall Spiral Round Duct
              </Button>
            </Box>
          </Box>
          <Box>
            <ul>
              {content[activeContentIndex].map((item) => (
                <Box key={item}>{item}</Box>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// import { useState } from "react";
// import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

// const content = [
//   [
//     <Box position="absolute" zIndex="170"  bg={{base:'none', lg:"#bad9fc"}} w={{base:'130%',lg:'97%'}} borderRadius='10px' m="10px" p='5px' ml={{base:"-80px", lg:"0px"}} mt={{base:"-270px", lg:"0px"}}>
//       <Box display="flex" flexDir="row" justifyContent="center">
//         <Box ml="40px">
//           <Text >
//             <span className="material">Material</span>Galvanized iron ducts
//             are made from sheet metal that has been coated with a layer of zinc
//             to prevent corrosion.
//           </Text>
//           <li className="material">Advantages</li>
//           <Box >
//             <Text>
//               Corrosion Resistance The zinc coating provides excellent
//               protection against rust and corrosion.
//             </Text>
//             <Text>
//               Cost-Effective Galvanized iron is generally more affordable than
//               some other duct materials.
//             </Text>
//             <Text>
//               Durable: These ducts are known for their durability and longevity.
//             </Text>
//             <Text>
//               Suitable for General HVAC They are commonly used in HVAC systems
//               for heating and cooling.
//             </Text>
//           </Box>
//         </Box>
//       </Box>
//     </Box>,
//   ],
//   [
//     <Box position="absolute" zIndex="160"  bg={{base:'none', lg:"#bad9fc"}} borderRadius='10px' m="10px" p='5px' ml={{base:"-50px",lg:"0px"}}  w={{base:'135%',lg:'97%'}} mt={{base:"-270px", lg:"0px"}}>
//       <Box display="flex" flexDir="row" justifyContent="center">
//         <Box >
//           <Text>
//             <span className="material">Material</span> Insulated ducts are
//             typically made from galvanized iron or other materials, with added
//             insulation layers.
//           </Text>
//           <li className="material">Advantages</li>
//           <Box>
//             <Text>
//               Thermal Insulation The insulation layer helps maintain
//               temperature control and prevent condensation.
//             </Text>
//             <Text>
//               Energy Efficiency: Insulated ducts reduce heat loss or gain,
//               improving overall HVAC system efficiency.
//             </Text>
//             <Text>
//               Condensation Prevention The insulation prevents moisture buildup,
//               reducing the risk of mold growth.
//             </Text>
//             <Text>
//               Noise Reduction: Insulated ducts can also provide sound
//               attenuation.
//             </Text>
//           </Box>
//         </Box>
//       </Box>
//     </Box>,
//   ],
//   [
//     <Box position="absolute" zIndex="160"   w={{base:'130%',lg:'97%'}}  borderRadius='10px' m="10px" p='5px' bg={{base:'none', lg:"#bad9fc"}} mt={{base:"-260px", lg:"0px"}} ml={{base:'-50px',lg:'0px'}}>
//       <Box display="flex" flexDir="row" justifyContent="center">
//         <Box>
//           <Text>
//             <span className="material">Material</span> Aluminum ducts are
//             constructed from lightweight aluminum sheets.
//           </Text>
//           <li className="material">Advantages</li>
//           <Box >
//             <Text>
//               Lightweight Aluminum is lighter than galvanized iron, making it
//               easier to handle and install.
//             </Text>
//             <Text>
//               Corrosion Resistance Aluminum naturally resists corrosion.
//             </Text>
//             <Text>
//               Aesthetic Appeal The clean, silver appearance of aluminum can be
//               aesthetically pleasing.
//             </Text>
//             <Text>
//               Suitable for Residential Applications Aluminum is often used in
//               residential HVAC systems.
//             </Text>
//           </Box>
//         </Box>
//       </Box>
//     </Box>,
//   ],

// ];

// export const DifferentTypesofSpiralRound = () => {
//   const [activeContentIndex, setActiveContentIndex] = useState(0);

//   return (
//     <Box display={{base:"flex ",lg:"flex"}} flexDir={{base:"column",lg:"row"}} justifyContent="center">
//       <Box>
//         <Box>
//           <Box>
//             <Box  mr={{base:"-700px",lg:"0px"}}>
//               <Heading textAlign="center" fontFamily="poppins" color="#808080">
//               DIFFERENT MATERIALS OF SPIRAL ROUND DUCT AND THERE BENEFITS
//               </Heading>
//             </Box>
//           </Box>
//         </Box>

//         <Box mt="4" ml={{base:"600px",lg:"0px"}}>
//           <Box display="flex" flexDir={{base:"column", lg:"row"}} ml={{base:"-500px", lg:"0px"}}>
//             <Box p={{ base: "14px", lg: "5px" }}>
//               <Button
//               fontSize="20px"
//                 w={{base:"80%",lg:"100%"}}

//                 bg='#2d6686'
//                 style={activeContentIndex === 0 ? { background: "#ff5c23" } : {}}
//                 colorScheme="#2d6686"

//                // className={activeContentIndex === 0 ? "" : ""}

//                 onClick={() => setActiveContentIndex(0)}
//               >
//                 Galvanized Iron Rectangular Duct

//               </Button>
//             </Box>

//             <Box p={{ base: "14px", lg: "5px" }}>
//               <Button
//                  w={{base:"80%",lg:"100%"}}
//                 fontSize="20px"
//                 bg='#2d6686'
//                 color='#fff'
//                 style={activeContentIndex === 1 ? { background: "#ff5c23" } : {}}
//                 colorScheme="#2d6686"

//                 onClick={() => setActiveContentIndex(1)}

//               >
//                 Insulated Rectangular Duct
//               </Button>
//             </Box>

//             <Box p={{ base: "14px", lg: "5px" }}>
//               <Button
//                 fontSize="20px"
//                 w={{base:"80%",lg:"100%"}}
//                 bg='#2d6686'
//                 color='#fff'
//                 style={activeContentIndex === 2 ? { background: "#ff5c23" } : {}}

//                 colorScheme="#2d6686"
//                 onClick={() => setActiveContentIndex(2)}
//               >
//                 Aluminum Rectangular Duct
//               </Button>
//             </Box>
//             <Box p={{ base: "14px", lg: "5px" }}>
//               <Button
//                 fontSize={{base:"20px",lg:"20px"}}
//                 w={{base:"80%",lg:"100%"}}
//                 p="10px"
//                 bg='#2d6686'
//                 color='#fff'
//                 style={activeContentIndex === 3 ? { background: "#ff5c23" } : {}}
//                 colorScheme="#2d6686"
//                 className={activeContentIndex === 3 ? "active" : ""}
//                 onClick={() => setActiveContentIndex(3)}
//               >
//                 Stainless Steel Rectangular Duct
//               </Button>
//             </Box>
//           </Box>
//           <Box>
//             <ul>
//               {content[activeContentIndex].map((item) => (
//                 <Box key={item}>{item}</Box>
//               ))}
//             </ul>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };
