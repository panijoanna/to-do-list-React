import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../tasks/queryParameters";
import searchQueryParamName from "../../tasks/searchQueryParamName";
import { StyledInput } from "./styled";

const SearchInput = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };
  return (
    <StyledInput
      required
      placeholder="Wyszukaj zadania..."
      autoComplete="off"
      onChange={onInputChange}
      value={query || ""}
    />
  );
};

export default SearchInput;
