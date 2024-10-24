import { createContext, useState, useContext, ReactNode } from "react";

interface User {
  title: string;
  message: string;
  totalPrice: string;
  freeGift: boolean;
}
interface SelectedUser {
  uuid: string;
  name: string;
}

interface UserContextProps {
  selectedUser: SelectedUser | null;
  setSelectedUser: (user: SelectedUser) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<SelectedUser | null>(null);
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{ selectedUser, setSelectedUser, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
