import React, { useEffect, useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import ColorProfile from "./ColorProfile";

const Result = ({ colorData, hsl, colorInput, lightness, hue, saturation }) => {
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
    getTintsAndShades(lightness);

    // Sort the shadesAndTints array
    shadesAndTints.sort((a, b) => a - b);
  }, [lightness]);

  return (
    <Flex
      direction="row"
      wrap="wrap"
      gap="5"
      justify="center"
      py={{ sm: "3", md: "5", lg: "5" }}
    >
      {/* Tints */}
      <ColorProfile
        shadesAndTints={shadesAndTints}
        colorData={colorData}
        colorInput={colorInput}
        lightness={lightness}
        saturation={saturation}
        hue={hue}
      ></ColorProfile>
    </Flex>
  );
};

export default Result;
