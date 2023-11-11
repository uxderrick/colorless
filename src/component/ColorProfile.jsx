import React, { useState, useEffect, useRef } from "react";
import { Flex, Text, Button } from "@radix-ui/themes";
import axios from "axios";
import * as Toast from "@radix-ui/react-toast";
import { hslToHex } from "../lib/Colorlib";

const ColorProfile = ({
  colorData,
  lightness,
  hue,
  saturation,
  shadesAndTints,
}) => {
  // State variable to store shadesAndTints
  const [shadesAndTintsData, setShadesAndTintsData] = useState([]);
  const [tintColorData, setTintColorData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [copiedColor, setCopiedColor] = useState("");

  // Update the state variable when shadesAndTints prop changes
  useEffect(() => {
    if (shadesAndTints) {
      setShadesAndTintsData(shadesAndTints);
    }
  }, [shadesAndTints]);

  //copy to clipboard toast

  // Fetch color data from API using hsl value
  const fetchColorData = async (tintLightness) => {
    const hslString = `hsl(${hue},${saturation}%,${tintLightness}%)`;
    const hex = hslToHex(hslString);

    if (shadesAndTints && shadesAndTints.length > 0) {
      setTintColorData((prevData) => ({
        ...prevData,
        [tintLightness]: hex.value,
      }));
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
    <Flex
      gap="1"
      direction="column"
      key={index}
      className="width"
      onClick={() => {
        navigator.clipboard.writeText(`${tintColorData[tintLightness]}`);
        setCopiedColor(tintColorData[tintLightness]);
        setOpen(false);
        setOpen(true);
      }}
    >
      <Flex
        className="box"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${tintLightness}%)`,
        }}
      ></Flex>

      <Text
        align="center"
        className="no-bg tintText"
        size="1"
        style={{ margin: "0px 0px 20px 0px" }}
      >
        {tintColorData[tintLightness]}
      </Text>
    </Flex>
  );

  if (colorData && shadesAndTintsData.length > 0) {
    //define tintLightness

    // Render color profiles using the map function
    return (
      <>
        {shadesAndTintsData.map((tintLightness, index) =>
          renderColorProfile(tintLightness, index)
        )}

        <Toast.Provider swipeDirection="right">
          <Toast.Root
            className="ToastRoot no-bg"
            open={open}
            onOpenChange={setOpen}
          >
            <Toast.Description className="no-bg">
              <Text className="no-bg" size="2">
                {copiedColor} copied to clipboard!
              </Text>
            </Toast.Description>
          </Toast.Root>

          <Toast.Viewport className="ToastViewport no-bg" />
        </Toast.Provider>
      </>
    );
  }
};

export default ColorProfile;
