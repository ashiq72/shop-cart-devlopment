"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();

  return <div>welcome to common layout</div>;
};

export default HomePage;
