import { useLocation, useNavigate } from "react-router-dom";
import { Tasks } from "../../types";

export const useQueryParameter = (key: string) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ key, value }: { key: string; value: string | undefined }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    const newSearch = searchParams.toString();
    navigate(`${location.pathname}?${newSearch}`);
  };
};
