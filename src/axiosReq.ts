import axios from "axios";
import type { AxiosResponse } from "axios";

interface User {
  name: string;
  age: number;
  isActive: boolean;
  dob: string;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<User> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response.data);
    // const response = await axios.get("https://dummyjson.com/test");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error message: ", error.message);
    }
  }
};

function getData<T>(value: T): T {
  return value;
}

const userData = getData<User>({
  name: "Man",
  age: 30,
  isActive: true,
  dob: "2000-07-01T00:00:001",
});

function useStateNumber(value: number) {
  return value;
}

function useStateString(value: string) {
  return value;
}

function useStateBoolean(value: boolean) {
  return value;
}
