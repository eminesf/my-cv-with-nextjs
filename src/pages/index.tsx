import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div>body</div>
      <Footer />
    </div>
  );
};

export default Home;
