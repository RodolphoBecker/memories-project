import React from "react";
import useStyles from "./styles";

import { Post } from "../";
import { useSelector } from "react-redux";

const Posts = () => {
	const classes = useStyles();
	const posts = useSelector((state) => state.posts);

	return (
		<>
			<Post />
			<Post />
			<Post />
			<Post />
		</>
	);
};

export default Posts;
