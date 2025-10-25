import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user = await getCurrentUser();

  console.log(user);

  return <div>welcome to common layout</div>;
};

export default HomePage;
