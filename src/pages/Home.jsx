import React, { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Box,
  TextField,
  TextFieldRoot,
  TextFieldSlot,
} from "@radix-ui/themes";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import "@radix-ui/themes/styles.css";
import Result from "../component/Result";
import EmptyState from "../component/EmptyState";
import axios from "axios";

const Home = () => {
  const [colorData, setColorData] = useState(null);
  const [colorInput, setColorInput] = useState("");
  const [hsl, setHsl] = useState("");
  const [preview, setPreview] = useState("");
  const [lightness, setLightness] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [hue, setHue] = useState(0);
  const [searchClicked, setSearchClicked] = useState(false);
  const [errorCatcher, setErrorCatcher] = useState("");

  const openDerrickURL = () => {
    window.open("https://twitter.com/uxderrick");
  };

  // Get data from API
  const fetchData = async () => {
    if (colorInput.length > 2) {
      setSearchClicked(true);

      axios
        .get(`https://www.thecolorapi.com/id?hex=${colorInput}&format=json`)
        .then((response) => {
          console.log(response?.data?.XYZ?.X);
          setErrorCatcher(response?.data?.XYZ?.X);
          setColorData(response?.data);
          setHsl(
            response?.data?.hsl?.value
            // .replace("hsl(", "")
            // .replace(")", "")
            // .replace(" ", "")
            // .replace(" ", "")
          );
          setPreview(response?.data?.image?.bare);
          setLightness(response?.data?.hsl?.l);
          setHue(response?.data?.hsl?.h);
          setSaturation(response?.data?.hsl?.s);
          setSearchClicked(true);
        })
        .catch((err) => {
          console.error("API request failed:", err);
        });
    }
  };

  const handleSearchClick = () => {
    if (colorInput.length > 2 && searchClicked === false) {
      fetchData();
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value.replace("#", "").replace(" ", "");
    setColorInput(newValue);
    setSearchClicked(false);

    // Reset the color data if the input is changed and Search hasn't been clicked
    if (searchClicked) {
      setColorData(null);
    } else null;
  };

  //
  // This is the UI for the home page
  return (
    <>
      <div className="between">
        <Flex direction="column">
          <Flex
            direction="column"
            align="center"
            py="8"
            gap="5"
            className="space"
          >
            <Flex direction="column" justify="center" align="center" gap="3">
              <img
                src="https://raw.githubusercontent.com/uxderrick/colorless/7adc4ec62eccd91aeddae753469b6327c26f46b9/src/assets/COLORLESS.svg"
                alt="logo"
              />
              <Text align="center">
                Enter your color Hex code and get its tints and shades
              </Text>
            </Flex>
            <Flex
              direction="column"
              style={{ maxWidth: 400 }}
              align="center"
              className="input"
            >
              {/* Search field */}
              <TextFieldRoot className="input">
                {/* Label */}
                <TextField.Input
                  placeholder="Enter your color code"
                  defaultValue={colorInput}
                  style={{ width: "100%" }}
                  maxLength={6}
                  onChange={handleInputChange}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
                />
                <TextField.Slot
                  className="mouse-hand"
                  onClick={handleSearchClick}
                >
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
              </TextFieldRoot>
            </Flex>

            {/* Result area */}

            {colorData &&
            searchClicked &&
            colorInput.length > 2 &&
            errorCatcher != null ? (
              <Result
                colorData={colorData}
                hsl={hsl}
                colorInput={colorInput}
                lightness={lightness}
                saturation={saturation}
                hue={hue}
              ></Result>
            ) : (
              <EmptyState errorCatcher={errorCatcher}></EmptyState>
            )}

            {/*  */}
          </Flex>
        </Flex>

        {/* Footer */}
        <Flex justify="center" align="center" gap="1" className="fixed-bottom">
          <Text align="center" className="no-bg">
            Built by
          </Text>
          <Text align="center" className="no-bg link" onClick={openDerrickURL}>
            UXDerrick
          </Text>
        </Flex>
      </div>
    </>
  );
};

export default Home;
