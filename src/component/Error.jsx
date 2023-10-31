import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const Error = () => {
  return (
    <>
      {/* Empty State */}
      <Flex direction="column" justify="center" align="center" gap="3" py="6">
        <img src="src/assets/warning sign.png" alt="logo" height="80px" />
        <Text align="center" className="grey-text">
          Enter a correct color code
        </Text>
      </Flex>
    </>
  );
};

export default Error;
