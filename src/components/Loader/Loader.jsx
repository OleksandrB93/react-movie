import { Bars } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";
export const Loader = () => (
<LoaderContainer>
<Bars
    height="80"
    width="80"
    radius="9"
    color="#14C6B3"
    ariaLabel="loading"
  />
</LoaderContainer>
);
