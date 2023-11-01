import React, { useEffect, useState } from "react";
import { Flex, Text } from "@radix-ui/themes";

const Result = ({ colorData, hsl, colorInput, lightness }) => {
  // Initialize an empty array for shades and tints
  const shadesAndTints = [];

  // Define the getTintsAndShades function to calculate shades and tints
  const getTintsAndShades = (lightness) => {
    let uniqueTintsAndShades = [];

    // Calculate tints
    for (
      let i = lightness;
      i <= 100 && uniqueTintsAndShades.length < 11;
      i += 10
    ) {
      const value = i;
      uniqueTintsAndShades.push(value);
    }

    // Calculate shades
    for (
      let i = lightness;
      i >= 0 && uniqueTintsAndShades.length < 11;
      i -= 10
    ) {
      const value = i;
      uniqueTintsAndShades.push(value);
    }

    // Remove duplicates
    uniqueTintsAndShades = [...new Set(uniqueTintsAndShades)];

    // Update the shadesAndTints array
    shadesAndTints.length = 0;
    shadesAndTints.push(...uniqueTintsAndShades);
  };

  useEffect(() => {
    console.log("Lightness", lightness);
    getTintsAndShades(lightness);

    // Sort the shadesAndTints array
    shadesAndTints.sort((a, b) => a - b);

    // Log the shadesAndTints array
    console.log("Shades and Tints", shadesAndTints);
  }, [lightness]);

  return (
    <Flex
      direction="row"
      wrap="wrap"
      gap="5"
      justify="center"
      py={{ sm: "3", md: "5", lg: "5" }}
    >
      <Flex gap="2" direction="column">
        <div
          className="box"
          style={{
            backgroundImage: `url(https://via.placeholder.com/200x200/${colorInput})`,
          }}
        ></div>

        <Text align="center" className="no-bg">
          {colorData?.hex?.value}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Result;
