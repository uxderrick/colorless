import React from "react";
import { Text, Flex, Box, TextField, TextFieldRoot } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import ColorCode from "../component/ColorCode";

const Home = () => {
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
              <img src="src/assets/COLORLESS.svg" alt="logo" />
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
                  placeholder="Enter your color code"
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
                src="src/assets/Color Palette 1.png"
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
          <Text align="center" className="no-bg link" onClick="">
            UXDerrick
          </Text>
        </Flex>
      </div>
    </>
  );
};

export default Home;
