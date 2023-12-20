import { UserContext } from "penly/contexts/UserContext";
import { User } from "penly/types/Users";
import { useState } from "react";

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
