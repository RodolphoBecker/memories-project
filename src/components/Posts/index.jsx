import React from "react";
import useStyles from "./styles";

import { Post } from "../";

const Posts = () => {
	const classes = useStyles();
	
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
