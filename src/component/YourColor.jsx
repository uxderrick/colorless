import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const YourColor = ({ colorData }) => {
  if (colorData) {
    // Render color profiles using the map function
    return (
      <>
        <Flex gap="2" direction="column" className="width">
          <div
            className="box"
            style={{
              backgroundImage: `url(${colorData?.image?.named})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <Text align="center" className="no-bg tintText">
            {colorData.hex.value}
          </Text>
        </Flex>
      </>
    );
  }
};

export default YourColor;
