import { StyledInput } from "./styled";

const SearchInput = () => {
  return (
    <StyledInput
      required
      placeholder="🔍Wyszukaj w liście zadań"
      autoComplete="off"
    />
  );
};

export default SearchInput;
