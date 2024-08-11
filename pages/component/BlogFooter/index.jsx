import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogFooter1 = () => {
  const [footer, setFooter] = useState([]);
  const [inc, setInc] = useState([]);
  const [show, setShow] = useState(false);
  const apiFetch = async () => {
    const response = await fetch("/api/blog_footer");
    const data = await response.json();
    console.log(data);
    setFooter(data);
  };
  const incCard = () => {
    setInc(footer.slice(0, 3));
  };
  const handleFooterIncCard = () => {
    setInc(footer);
    setShow(true);
  };
  const handleFooterDecCard = () => {
    setInc(footer.slice(0, 3));
    setShow(false);
  };
  useEffect(() => {
    apiFetch();
    incCard();
  }, []);
  return (
    <div>
      <div className="footer_1">
        {inc &&
          inc.map((item, i) => {
            return (
              <>
                <div className="footer_1_card_main" key={i}>
                  <img src={item.image} alt={item.title} />
                  <div className="blog_footer_title">
                    {item.Blog_footer1_title}
                  </div>
                  <div className="blog_footer_description">
                    {item.Blog_footer1_description}
                  </div>
                  <div className="blog_footer_card_footer">
                    <div className="blog_footer_author">
                      {item.author} {"*"}
                    </div>
                    <div className="blog_footer_time">{item.time}</div>
                  </div>
                  <div className="blog_footer_id_link">
                    <Link href="/">Read About</Link>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="footer_main_div">
        <div className="footer_button">
          {show ? (
            <button onClick={handleFooterDecCard}>Show Less</button>
          ) : (
            <button onClick={handleFooterIncCard}>Show More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogFooter1;
