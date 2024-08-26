import { Box, SxProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface IFlexRow {
  sx?: SxProps;
}

const FlexRow: FC<PropsWithChildren<IFlexRow>> = ({ children, sx }) => (
  <Box display={"flex"} alignItems={"center"} sx={sx}>
    {children}
  </Box>
);

export default FlexRow;
