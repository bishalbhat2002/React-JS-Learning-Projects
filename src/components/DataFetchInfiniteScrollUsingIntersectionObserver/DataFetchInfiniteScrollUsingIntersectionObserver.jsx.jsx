import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";
import { useState, useEffect, useRef } from "react";

// https://jsonplaceholder.typicode.com/posts?_page=3&_limit=11

const DataFetchInfiniteScrollUsingIntersectionObserver = () => {
  const explained =
    "This component demonstrates the infinite Scrolling Feature of Social media Website, Where content is dynamically fetched form backend on the basis of Scroll using IntersectionObserver.... Note: Don't scroll too much, as this component only contains logic for infinte scroll (not virtualization), so IF you scroll too much, then a large amount of eleemnts are added to the dom, and the browser will crash😂😂😂.... I am learning Infinite scroll in this component, so No virutalization here. ";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [page, setPage] = useState(0);
  const loadRef = useRef();
  const [postsEnd, setPostsEnd] = useState(false);

  async function loadContent() {
    try {
      setLoading(true);
      const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.length === 0) {
        return setPostsEnd(true);
      }

      setPosts((posts) => [...posts, ...data]);
      // console.log(url);
      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Load content initially when the component mounts
  useEffect(() => {
    console.log("data fetching after page value is incremented...");
    if (loading) return;
    loadContent();
  }, [page]);

  useEffect(() => {
    console.log("useEffect when component is mount.");

    if (!loadRef.current) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.map((entry) => {
          // This code is executed each time the specified object becoms visbile in the viewport.
          if (entry.isIntersecting && !loading) {
            console.log("page value incremented.... by 1");
            setPage((prev) => prev + 1);
          }
        }),
      {
        threshold: 0.6,
        // rootMargin: "0px",
        // root: document.querySelector("#container"),
      },
    );

    observer.observe(loadRef.current);

    // Clean up the observer.
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header
        className="text-sm"
        heading="Infinite Scroll Using IntersectionObserver"
      />

      <section className="mx-auto mt-3 lg:mt-4 p-4 w-90 lg:w-160 text-xl lg:text-3xl rounded font-semibold text-gray-800 bg-green-200 gap-3">
        <div
          id="container"
          className="flex flex-col h-130 overflow-auto gap-2 w-full"
        >
          {posts?.map((post) => (
            <div
              key={post.id}
              className="w-full block bg-red-200 border-1 rounded py-2 px-3"
            >
              <p className="text-sm]">
                <b>{post.id}</b>. <i>{post.title}</i>
              </p>
              <p className="text-[15px]">{post.body}</p>
            </div>
          ))}
          {postsEnd ? (
            <p className="text-center animate-pulse">
              No New Posts...
            </p>
          ) : (
            <p ref={loadRef} className="text-center animate-pulse">
              Loading...
            </p>
          )}
        </div>
      </section>
      <div className="w-full flex justify-center my-2">
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="bg-blue-500 font-medium text-white px-3 py-1 rounded-md hover:scale-102 active:scale-99 ease-in-out duration-200"
        >
          {!showExplanation ? "Show" : "Hide"} Explation
        </button>
      </div>
      {showExplanation && <Explanation explained={explained} />}
    </>
  );
};

export default DataFetchInfiniteScrollUsingIntersectionObserver;
