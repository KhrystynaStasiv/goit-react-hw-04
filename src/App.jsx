import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./unsplash.api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchImagesData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages(query, page, 12);
        const newImages =
          page === 1 ? response.results : [...images, ...response.results];
        setImages(newImages);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesData();
  }, [query, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputQuery = form.query.value;
    if (inputQuery !== query) {
      setQuery(inputQuery);
      setPage(1);
      form.reset();
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery img={images} />
      {isError && <ErrorMessage />}
      {!isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
