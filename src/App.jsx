import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "../unsplash.api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages(query, page);
        setImages(response);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesData();
  }, [query, page]);

  const handleChnageQuery = (query) => {
    setQuery(query);
  };
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChnageQuery} />
      {isloading && <Loader />}
      <ImageGallery img={images} />
      {isError && <ErrorMessage />}
      <LoadMoreBtn onClick={handleLoadMore} />
    </div>
  );
}

export default App;
