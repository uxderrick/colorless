import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const color = "#ffffff";

const ColorCode = () => {
  return (
    <>
      <Flex gap="2" direction="column">
        <div
          className="box"
          style={{
            backgroundColor: color,
          }}
        ></div>

        <Text align="center" className="no-bg">
          #FFFFFF
        </Text>
      </Flex>
    </>
  );
};

export default ColorCode;
