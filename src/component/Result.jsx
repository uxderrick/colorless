import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const Result = ({ colorData, hsl, colorInput, lightness }) => {
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
