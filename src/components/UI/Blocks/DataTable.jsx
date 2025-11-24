// src/components/UI/Blocks/DataTable.jsx
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";

export function DataTable({
  columns = [],
  data = [],
  variant = "neutral",
  striped = false,
  ...props
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  
  const v = theme.colors?.variants?.[variant];
  const headerBg = v?.[colorMode];
  const headerText = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`];
  const borderColor = colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100";
  const stripeColor = colorMode === "dark" ? "whiteAlpha.50" : "blackAlpha.50";

  return (
    <Table variant="simple" {...props}>
      <Thead bg={headerBg}>
        <Tr>
          {columns.map((column) => (
            <Th 
              key={column.key} 
              color={headerText}
              borderColor={borderColor}
            >
              {column.header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr 
            key={row.id || index}
            bg={striped && index % 2 === 1 ? stripeColor : 'transparent'}
          >
            {columns.map((column) => (
              <Td key={column.key} borderColor={borderColor}>
                {row[column.key]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}