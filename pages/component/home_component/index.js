import Link from "next/link";
import React, { useState } from "react";

const Home_header = () => {
  //   const [todayDate, setTodayDate] = useState("");
  const date = new Date();
  const d = new Date();
  let day = d.getDay();
  console.log("day", day);
  const todayDate = date.toLocaleDateString();
  //   const todayDay = date.togetDay();
  return (
    <div>
      <div className="home_header_main_div">
        <h2>BloomBlog</h2>
        <hr />
        <div className="home_header_inner_div">
          <div className="home_header_date">
            Dates: <br /> {todayDate}{" "}
          </div>
          <div className="home_header_links">
            <div className="l1">
              <Link href="/">Home</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/world">World</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/politics">Politics</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/business">Business</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/vr">VR</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/opinion">Opinion</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/tech">Tech</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/science">Science</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/sport">Sport</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/arts">Arts</Link>
            </div>
            <div className="l1">
              <Link href="/component/header_link/books">Books</Link>
            </div>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default Home_header;
