import type { FC } from "react";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

type LoadingProps = {
  color?: string;
  size?: number;
  sx?: SxProps;
};
const Loading: FC<LoadingProps> = ({
  sx: sxProp,
  color = "secondary",
  size = 40,
}) => (
  <Box
    data-testid="loading"
    sx={{
      flex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 4,
      ...sxProp,
    }}
  >
    <CircularProgress
      size={size}
      sx={{
        color: color.split(".").length > 1 ? color : `${color}.main`,
        width: size,
        height: size,
      }}
    />
  </Box>
);

export default Loading;