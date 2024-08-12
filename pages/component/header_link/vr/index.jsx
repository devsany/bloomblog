import React, { useEffect, useState } from "react";
import Home_header from "../../home_component";
import Link from "next/link";

const VR = () => {
  const [business, setBusiness] = useState([]);
  const apiResponse = async () => {
    const response = await fetch("/api/vr");
    const data = await response.json();
    console.log(data);
    setBusiness(data);
  };
  useEffect(() => {
    apiResponse();
  }, []);
  return (
    <div>
      <Home_header />
      <div className="path ml-5 border border-l-white border-r-white border-b-white border-t-gray-200 mr-5">
        <Link href="/">Home</Link>
        {">"} <span style={{ color: "blue" }}>VR (Virtual Reality)</span>
      </div>
      <div className="card">
        {business &&
          business.map((item, i) => {
            return (
              <>
                <div className="individual_blog">
                  <div className="individual_blog_about_blog">
                    <img src={item.blog_image} alt={item.blog_title} />
                    <h2>{item.blog_title}</h2>
                    <div className="world_bolg_image_overlap_words">
                      <div className="News_date  mr-2">
                        {item.date_of_publision}
                      </div>
                      <div className="News_date mr-2">({item.author})</div>
                      <div className="News_date">{item.time}</div>
                    </div>
                    <div className="News_dates desctipion">
                      {item.blog_description}
                    </div>
                  </div>
                  <div className="individual_blog_about_author">
                    <h2>About Author</h2>
                    <div className="author">Name of Author:-{item.author}</div>
                    <div className="author_description">
                      -{"  "}
                      {item.about_author}
                    </div>
                    <h2>Follow Me</h2>
                    <img
                      src="public/instagram-svgrepo-com.png"
                      alt="insta_icon"
                    />
                    <Link href={item.social_media_link.instagram}>
                      instagram
                    </Link>
                    <Link href={item.social_media_link.facebook}>facebook</Link>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default VR;
