import { Heading } from "./styled";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <header>
    <Heading>{title}</Heading>
  </header>
);

export default Header;
