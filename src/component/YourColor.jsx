import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const YourColor = ({ colorData, lightness, hue, saturation }) => {
  if (colorData) {
    // Render color profiles using the map function
    return (
      <>
        <Flex gap="2" direction="column" className="width">
          <div
            className="box"
            style={{
              backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
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
