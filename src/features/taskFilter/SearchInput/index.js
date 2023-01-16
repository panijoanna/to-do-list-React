import { useQueryParameter, useReplaceQueryParameter } from "../../tasks/queryParameters";
import searchQueryParamName from "../../tasks/searchQueryParamName";
import { StyledInput } from "./styled";

const SearchInput = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  return (
    <StyledInput
      required
      placeholder="🔍Wyszukaj w liście zadań"
      autoComplete="off"
    />
  );
};

export default SearchInput;
