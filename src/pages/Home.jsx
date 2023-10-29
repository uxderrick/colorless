import React from "react";
import { Text, Flex, Box, TextField, TextFieldRoot } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import ColorCode from "../component/ColorCode";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  const openDerrickURL = () => {
    window.open("https://twitter.com/uxderrick");
  };

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
              <TextFieldRoot className="input">
                <TextField.Input
                  placeholder="Enter your color code without #"
                  // defaultValue="#ff0000"
                  style={{ width: "100%" }}
                />
              </TextFieldRoot>
            </Flex>

            {/* Result area */}
            <Flex
              direction="row"
              wrap="wrap"
              gap="5"
              justify="center"
              py={{ sm: "3", md: "5", lg: "5" }}
            >
              <ColorCode></ColorCode>
              <ColorCode></ColorCode>
              <ColorCode></ColorCode>
              <ColorCode></ColorCode>
              <ColorCode></ColorCode>
              <ColorCode></ColorCode>
            </Flex>

            {/* Empty State */}
            <Flex
              direction="column"
              justify="center"
              align="center"
              gap="3"
              py="6"
            >
              <img
                src="https://github.com/uxderrick/colorless/blob/main/src/assets/Color%20Palette%201.png?raw=true"
                alt="logo"
                height="80px"
              />
              <Text align="center" className="grey-text">
                No colors inputed yet
              </Text>

              {/*  */}
            </Flex>
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
      <Analytics />
    </>
  );
};

export default Home;
