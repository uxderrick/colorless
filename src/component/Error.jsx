import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const Error = () => {
  return (
    <>
      {/* Empty State */}
      <Flex direction="column" justify="center" align="center" gap="3" py="6">
        <img src="src/assets/warning sign.png" alt="logo" height="80px" />
        <Text align="center" className="grey-text width">
          Enter a correct color code. eg., #000000, #ffffff, #ff0000, #00ff00,
        </Text>
      </Flex>
    </>
  );
};

export default Error;
