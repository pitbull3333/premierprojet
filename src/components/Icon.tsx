import type React from "react";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

interface IconProps {
  name: string;
  style?: SxProps;
  size?: number;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  style,
  size = 24,
  onClick,
}) => {
  const iconClass = `icon-${name}`;

  return (
    <Box
      sx={{
        fontSize: size,
        display: "inline-flex",
        cursor: onClick ? "pointer" : "inherit",
        ...style,
      }}
      component="span"
      onClick={onClick}
    >
      <i className={iconClass} />
    </Box>
  );
};

export default Icon;