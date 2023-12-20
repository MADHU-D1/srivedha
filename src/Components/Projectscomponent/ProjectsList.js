import React from "react";
import Slider from "react-slick";
import { Box, Heading, Image } from "@chakra-ui/react";

const ProjectCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Project Image ${index + 1}`}
          w={{ base: "400px", lg: "400px" }}
          p={{ base: "10px", lg: "15px" }}
        />
      ))}
    </Slider>
  );
};

const ProjectsList = () => {
  return (
    <Box
    // bg={{ base: "lightgray", lg: "lightgray" }}
    // mt="10px"
    // borderRadius="10px"
    // p={{ base: "30px", lg: "30px" }}
    //w={{base:"1000px", lg:"1400px"}}
    p='20px'
    >
      <Box>
        <Heading
          textAlign="center"
          mr={{ base: "-710px", lg: "0px" }}
          pt="40px"
          fontFamily="poppins"
          color="#0b2558"
        >
          OUR ACCOMPLISHED PRESTIGIOUS PROJECTS
        </Heading>
      </Box>

      {/* North Side Images */}
      <Box
        bg={{ base: "#e8e4e4", lg: "#e8e4e4" }}
        mt="15px"
        borderRadius="10px"
        p={{ base: "30px", lg: "30px" }}
        w={{base:"1100px", lg:"100%"}}
      
      >
        <Box mt="10px">
          <Heading mt="30px" textAlign="center" color="#ff5c23">
            NORTH SIDE
          </Heading>
          <ProjectCarousel
            images={[
              "Northsideimg1.jpeg ",
              "Northsideimg2.jpeg",
              "Northsideimg3.jpeg",
              "Northsideimg4.jpeg",
              "Northsideimg5.jpeg",
              "Northsideimg6.jpeg",
            ]}
          />
        </Box>

        {/* East Side Images */}
        <Box mt="40px">
          <Heading mt="30px" textAlign="center" color="#ff5c23">
            EAST SIDE
          </Heading>
          <ProjectCarousel
            images={[
              "EastSideimg1.jpeg",
              "EastSideimg5.jpeg",
              "EastSideimg3.jpeg",
              "EastSideimg4.jpeg",
              "EastSideimg3.jpeg",
              "EastSideimg2.jpeg",
            ]}
          />
        </Box>

        {/* West Side Images */}
        <Box mt="50px">
          <Heading
            mt="30px"
            textAlign="center"
            fontFamily="poppins"
            color="#ff5c23"
          >
            WEST SIDE
          </Heading>
          <ProjectCarousel
            images={[
              "Westimg1.jpeg",
              "Westimg2.jpeg",
              "Westimg3.jpeg",
              "Westimg4.jpeg",
              "Westimg5.jpeg",
              "Westimg6.jpeg",
            ]}
          />
        </Box>

        {/* South Side Images */}
        <Box mt="50px">
          <Heading
            mt="30px"
            textAlign="center"
            fontFamily="poppins"
            color="#ff5c23"
          >
            SOUTH SIDE
          </Heading>
          <ProjectCarousel
            images={[
              
              "Southimg1.jpeg",
              "Southimg2.jpeg",
              "Southimg3.jpeg",
              "Southimg4.jpeg",
              "Southimg5.jpeg",
              "Southimg6.jpeg",
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsList;

