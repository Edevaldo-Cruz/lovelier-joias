import { useEffect } from "react";
import Cards from "../../Components/Cards";
import Navbar from "../../Components/Navbar";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/produtos");
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Cards />
    </>
  );
}
