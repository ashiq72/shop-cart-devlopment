"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);

  return <div>welcome to common layout</div>;
};

export default HomePage;
