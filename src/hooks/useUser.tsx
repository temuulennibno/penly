import { UserContext } from "penly/contexts/UserContext";
import { useContext } from "react";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};
