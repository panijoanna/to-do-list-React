import { Heading } from "./styled";

const Header = ({ title }) => (
  <header className="header">
    <Heading>{title}</Heading>
  </header>
);

export default Header;
