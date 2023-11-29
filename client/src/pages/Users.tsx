import React, { useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  userName: string;
  password: string;
  image: string;
  birthDate: string;
  bloodGroup: string;
  height: string;
  weight: string;
  eyeColor: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
  };
};
interface Users {
  users: User[];
}

const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData: Users = await response.json();
        setUsers(jsonData.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUsers();
  }, []);

  return <div>Users</div>;
};

export default Users;
