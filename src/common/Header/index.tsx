import { Heading } from "./styled";

interface HeaderTitle {
  title: string;
}

const Header = ({ title }: HeaderTitle) => (
  <header>
    <Heading>{title}</Heading>
  </header>
);

export default Header;
