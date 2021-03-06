import React from "react";

const Book = ({ img, title, author }) => {
	// const { img, title, author } = props;
	const clickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert("hello");
	};
	const Complex = (author) => {
		console.log(author);
	};

	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt="pic" />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>
				Reference Example
			</button>
			<button type="button" onClick={() => Complex(author)}>
				Complex Example
			</button>
		</article>
	);
};

export default Book;
