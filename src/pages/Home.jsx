import React, { useState } from "react";
import {
  Text,
  Flex,
  TextField,
  TextFieldRoot,
  Button,
  Popover,
} from "@radix-ui/themes";

import { MagnifyingGlassIcon, Crosshair1Icon } from "@radix-ui/react-icons";
import "@radix-ui/themes/styles.css";
import Result from "../component/Result";
import EmptyState from "../component/EmptyState";
import { SketchPicker } from "react-color";
import axios from "axios";

const Home = () => {
  const [colorData, setColorData] = useState(null);
  const [colorInput, setColorInput] = useState("".replace("#", ""));
  const [hsl, setHsl] = useState("");
  const [preview, setPreview] = useState("");
  const [lightness, setLightness] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [hue, setHue] = useState(0);
  const [searchClicked, setSearchClicked] = useState(false);
  const [errorCatcher, setErrorCatcher] = useState("");
  const [colorPickerColor, setColorPickerColor] = useState("FFFFFF");

  const openDerrickURL = () => {
    window.open("https://twitter.com/uxderrick");
  };

  const refreshPage = () => {
    window.open("https://colorless-ux.vercel.app/");
    setColorInput("");
  };

  // Get data from API
  const fetchData = async () => {
    if (colorInput.length > 2) {
      setSearchClicked(true);

      axios
        .get(`https://www.thecolorapi.com/id?hex=${colorInput}&format=json`)
        .then((response) => {
          // console.log(response);
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

  const handleColorChange = (color) => {
    setColorPickerColor(color.hex.replace("#", ""));
    setColorInput(color.hex.replace("#", ""));
    setSearchClicked(false);
    // console.log(color.hex.replace("#", ""));
    // console.log(colorInput);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value
      .replace("#", "")
      .replace(" ", "")
      .replace("#", "");
    setColorInput(newValue.replace(" ", ""));
    setSearchClicked(false);
    // console.log(colorInput);

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
                onClick={refreshPage}
                className="mouse-hand"
              />
              <Text align="center">
                Enter your color Hex code and get its tints and shades
              </Text>
            </Flex>

            <Flex
              direction="column"
              style={{ maxWidth: 400, borderRadius: 10 }}
              align="center"
              className="input"
            >
              {/* Search field */}
              <Flex
                direction="column"
                style={{ maxWidth: 400 }}
                align="center"
                className="input"
              >
                <TextFieldRoot className="input">
                  {/* Label */}
                  <TextField.Input
                    placeholder="Enter your color code"
                    value={colorInput.toUpperCase()}
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

              {/* Color selector */}
              <Popover.Root className="no-bg">
                <Popover.Trigger className="no-bg">
                  <Button
                    variant="soft"
                    size="1"
                    // color="gray"
                    className="no-bg colorless"
                  >
                    <Crosshair1Icon width="16" height="16" className="no-bg" />
                    OR select from a color picker
                  </Button>
                </Popover.Trigger>
                <Popover.Content
                  align="center"
                  style={{ width: 240 }}
                  className="no-bg colorless"
                >
                  <Flex gap="3" className="no-bg colorless" justify="center">
                    <Flex className="no-bg center colorless">
                      <SketchPicker
                        color={colorPickerColor} // Use colorPickerColor as the initial color
                        onChangeComplete={handleColorChange}
                        className="no-bg"
                        justify="center"
                      />

                      <Flex gap="3" mt="3" justify="center" className="no-bg">
                        {/* <Flex align="center" gap="2" asChild className="no-bg">
                          <Text as="label" size="2"></Text>
                        </Flex> */}
                        <Popover.Close className="no-bg">
                          <Button
                            size="2"
                            onClick={handleSearchClick}
                            style={{ width: 240 }}
                          >
                            Submit
                          </Button>
                        </Popover.Close>
                      </Flex>
                    </Flex>
                  </Flex>
                </Popover.Content>
              </Popover.Root>
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
