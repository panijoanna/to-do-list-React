import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
    
};
