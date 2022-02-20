import SvgIcon from "@mui/material/SvgIcon";
import LogoSvg from "./logo.svg";

const Logo = (props: any) => (
  <SvgIcon {...props} component={LogoSvg} inheritViewBox />
);

export default Logo;
