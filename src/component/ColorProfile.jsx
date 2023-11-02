import React, { useState, useEffect } from "react";
import { Flex, Text } from "@radix-ui/themes";
import axios from "axios";

const ColorProfile = ({
  colorData,
  colorInput,
  lightness,
  hue,
  saturation,
  shadesAndTints,
}) => {
  // State variable to store shadesAndTints
  const [shadesAndTintsData, setShadesAndTintsData] = useState([]);
  const [tintColorData, setTintColorData] = useState({});

  // Update the state variable when shadesAndTints prop changes
  useEffect(() => {
    if (shadesAndTints) {
      setShadesAndTintsData(shadesAndTints);
    }
  }, [shadesAndTints]);

  // Fetch color data from API using hsl value
  const fetchColorData = async (tintLightness) => {
    const hsl = `${hue},${saturation}%,${tintLightness}%`;

    if (shadesAndTints && shadesAndTints.length > 0) {
      axios
        .get(
          `https://www.thecolorapi.com/id?hsl=${hsl}&format=json&precision=1`
        )
        .then((response) => {
          // Store the hex code in the tintColorData state object with lightness as the key
          setTintColorData((prevData) => ({
            ...prevData,
            [tintLightness]: response?.data?.hex?.value,
          }));
        })
        .catch((err) => {
          console.error("API request failed:", err);
        });
    }
  };

  // Update the state variable when shadesAndTints or lightness prop changes
  useEffect(() => {
    if (shadesAndTintsData.length > 0) {
      shadesAndTintsData.forEach((tintLightness) => {
        fetchColorData(tintLightness);
      });
    }
  }, [shadesAndTintsData, lightness]);

  // Create a rendering function for individual color profiles
  const renderColorProfile = (tintLightness, index) => (
    <Flex gap="2" direction="column" key={index} className="width">
      <div
        className="box"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${tintLightness}%)`,
        }}
      ></div>

      <Text align="center" className="no-bg tintText">
        {tintColorData[tintLightness]}
      </Text>
    </Flex>
  );

  if (colorData && shadesAndTintsData.length > 0) {
    // Render color profiles using the map function
    return (
      <>
        {shadesAndTintsData.map((tintLightness, index) =>
          renderColorProfile(tintLightness, index)
        )}
      </>
    );
  }
};

export default ColorProfile;
