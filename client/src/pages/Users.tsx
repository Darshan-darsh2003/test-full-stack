import { Grid, Skeleton } from "@mantine/core";
import React, { useEffect, useState } from "react";
import UserCard from "../components/Users/UserCard";

export type User = {
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

  return (
    <Grid>
      <Grid.Col>
        <h1>Our Users</h1>
      </Grid.Col>
      {users
        ? users?.map((user) => (
            <Grid.Col span={{ xl: 4, lg: 4, md: 6, sm: 12, xs: 12 }}>
              <UserCard key={user.id} user={user} />
            </Grid.Col>
          ))
        : [...Array(6)].map((_, index) => (
            <Grid.Col
              key={index}
              span={{ xl: 4, lg: 4, md: 6, sm: 12, xs: 12 }}
            >
              <Skeleton height={200} radius={8} />
            </Grid.Col>
          ))}
    </Grid>
  );
};

export default Users;
