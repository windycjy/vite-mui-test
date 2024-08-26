import { FC, ReactElement } from "react";
import { Typography } from "@mui/material";
import FlexRow from "./FlexRow";

interface IGridItem {
  title: string;
  value: string | number;
  currency?: string;
  subtext?: string;
  action?: ReactElement;
}
const GridItem: FC<IGridItem> = ({
  title,
  value,
  currency,
  subtext,
  action,
}) => {
  return (
    <FlexRow
      sx={{
        justifyContent: "space-between",
      }}
    >
      <FlexRow
        sx={{
          alignItems: "baseline",
          gap: 0.5,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>{`${title}:`}</Typography>
        <Typography>{currency}</Typography>
        <Typography sx={{ fontWeight: 600, fontSize: 20 }} color="primary">
          {value}
        </Typography>
        <Typography>{subtext}</Typography>
      </FlexRow>

      {action}
    </FlexRow>
  );
};

export default GridItem;
