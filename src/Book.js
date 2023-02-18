import React from "react";

const Book = ({ img, title, author }) => {
  //clickHandler
  const clickHandler = (e) => {
    alert("Hey There");
  };
  const fetchData = (author) => {
    alert(author);
  };
  return (
    // onMouseOver
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      {/* onClick */}
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => fetchData(author)}>
        Fetch Data
      </button>
    </article>
  );
};

export default Book;
