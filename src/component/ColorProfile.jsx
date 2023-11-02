import React, { useState, useEffect } from "react";
import { Flex, Text } from "@radix-ui/themes";

const ColorProfile = ({
  colorData,
  hsl,
  colorInput,
  lightness,
  hue,
  saturation,
  shadesAndTints,
}) => {
  // State variable to store shadesAndTints
  const [shadesAndTintsData, setShadesAndTintsData] = useState([]);

  // Update the state variable when shadesAndTints prop changes
  useEffect(() => {
    if (shadesAndTints) {
      setShadesAndTintsData(shadesAndTints);
    }
  }, [shadesAndTints]);

  // Create a rendering function for individual color profiles
  const renderColorProfile = (lightness, index) => (
    <Flex gap="2" direction="column" key={index}>
      <div
        className="box"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        }}
      ></div>

      <Text align="center" className="no-bg">
        {colorData?.hex?.value}
      </Text>
    </Flex>
  );

  if (colorData && shadesAndTintsData.length > 0) {
    // Render color profiles using the map function
    return (
      <>
        {shadesAndTintsData.map((lightness, index) =>
          renderColorProfile(lightness, index)
        )}
      </>
    );
  }
};

export default ColorProfile;
