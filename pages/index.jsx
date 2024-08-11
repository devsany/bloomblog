import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import Home_header from "./component/home_component";
import BlogFooter1 from "./component/BlogFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [footer, setFooter] = useState([]);
  const [inc, setInc] = useState([]);
  const [firstMainNews, setFirstMainNews] = useState(true);

  const [movie, setMovie] = useState([]);
  const [news, setNews] = useState([]);
  const [sliceMovie, setSliceMovie] = useState("");
  const [moreNewsFromApi, setMoreNews] = useState([]);
  const [moresNewsFromApi, setMoresNews] = useState([]);
  // movie api call
  const handleMovieApi = async () => {
    const response = await fetch("/api/home_movie");
    const apiData = await response.json();
    console.log("movie api call", apiData);
    setMovie(apiData.reverse());
  };
  // news api call
  const handleNewsApi = async () => {
    const response = await fetch("/api/home_news");
    const apiData = await response.json();
    console.log("news api call", apiData);
    setNews(apiData.reverse().slice(0, 2));
  };
  const moreNews = async () => {
    const response = await fetch("/api/home_news");
    const apiData = await response.json();
    console.log("news api call", apiData);
    setMoreNews(apiData);
  };
  const showMoreNewsApi = () => {
    setFirstMainNews(false);
    setMoresNews(moreNewsFromApi.reverse().slice(0, 10000));
  };
  const movieIncrease = () => {
    let increase = 5;
    setSliceMovie(movie.slice(increase, increase + 5));
    increase += 5;
  };
  // const date = new Date();
  // console.log(date.toDateString());
  useEffect(() => {
    handleMovieApi();
    handleNewsApi();
    moreNews();
  }, []);
  return (
    <>
      <Home_header />
      <div className="home_page_main_div">
        <div className="home_page_header_link"></div>
        <div className="movies_main_div">
          <div className="movie_heading">
            <div className="movie_heading_title">
              {" "}
              <h2>
                Movies{" "}
                <span className="news_link">
                  <Link style={{ textDecoration: "none" }} href="/">
                    {">"}
                  </Link>
                </span>
              </h2>
            </div>
            <div className="movie_link">
              <Link style={{ color: "gray" }} href="/Home_movie_Trailers">
                Trailer
              </Link>
              {"      "}
              <Link style={{ color: "gray" }} href="/Home_movie_Premieres">
                Premieres
              </Link>
              {"      "}
              <Link style={{ color: "gray" }} href="/Home_movie_Announced">
                Announced
              </Link>
            </div>
          </div>
          {/* <hr /> */}

          <div className="Home_movie_API_data">
            {sliceMovie ||
              (movie &&
                movie.map((item, i) => {
                  return (
                    <>
                      <div key={i}>
                        <div className="movie_image">
                          <img src={item.image} alt={item.movie_title} />
                        </div>
                        <div className="News_date movie_date">{item.date}</div>
                        <div className="news_title">
                          - {"   "}
                          {item.movie_title}
                        </div>
                        <a className="news_id_a" href={item.link}>
                          Watch
                        </a>
                        <hr />
                      </div>
                    </>
                  );
                }))}
          </div>
          {/* <button onClick={movieIncrease}>Show more</button> */}
        </div>
        
        <div className="latest_news_main_div">
          <h2>
            Latest News{" "}
            <span className="news_link">
              <Link style={{ textDecoration: "none" }} href="/">
                {">"}
              </Link>
            </span>
          </h2>
          {firstMainNews ? (
            <>
              {news &&
                news.map((item, i) => {
                  return (
                    <>
                      <div className="news_section" key={i}>
                        <div className="news_section_header">
                          <div className="news_catogery">{item.catogery}</div>
                          <div className="News_date">{item.date}</div>
                        </div>
                        <div className="news_title">{item.news_title}</div>
                        <div className="News_description">
                          {item.News_description}
                        </div>
                        <Link className="news_id_link" href="/">
                          Continue Reading
                        </Link>
                        <hr />
                      </div>
                    </>
                  );
                })}
            </>
          ) : (
            <>
              {moresNewsFromApi &&
                moresNewsFromApi.map((item, i) => {
                  return (
                    <>
                      <div className="news_section" key={i}>
                        <div className="news_section_header">
                          <div className="news_catogery">{item.catogery}</div>
                          <div className="News_date">{item.date}</div>
                        </div>
                        <div className="news_title">{item.news_title}</div>
                        <div className="News_description">
                          {item.News_description}
                        </div>
                        <Link className="news_id_link" href="/">
                          Continue Reading
                        </Link>
                        <hr />
                      </div>
                    </>
                  );
                })}
            </>
          )}

          <div className="footer_main_div">
            <div className="footer_button">
              <button onClick={showMoreNewsApi}>Show More</button>
            </div>
          </div>
        </div>
      </div>
      <BlogFooter1 />
    </>
  );
}
