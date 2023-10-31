import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const EmptyState = () => {
  return (
    <>
      {/* Empty State */}
      <Flex direction="column" justify="center" align="center" gap="3" py="6">
        <img
          src="https://github.com/uxderrick/colorless/blob/main/src/assets/Color%20Palette%201.png?raw=true"
          alt="logo"
          height="80px"
        />
        <Text align="center" className="grey-text width">
          No colors inputed yet. Enter a color code and click on the search
          button to get started.
        </Text>
      </Flex>
    </>
  );
};

export default EmptyState;
