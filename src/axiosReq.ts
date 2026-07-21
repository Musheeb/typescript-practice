import axios, { AxiosResponse } from "axios";

interface User {
  name: string;
  age: number;
  isActive: boolean;
  dob: string;
}

const fetchData: AxiosResponse<User> = async () => {
  const response = await axios.get("https://dummyjson.com/test");
};
