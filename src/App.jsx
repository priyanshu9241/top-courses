import { useEffect, useState } from "react";
import "./App.css";
import { apiUrl, filterData } from "./Data";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch(apiUrl);
      const data = await result.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("something went wrong");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-950 opacity-95">
        <Nav />
        <div className="h-full">
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
            {loading ? (
              <Spinner />
            ) : (
              <Cards courses={courses} category={category} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
