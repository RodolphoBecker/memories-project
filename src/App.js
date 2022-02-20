import React, { useEffect } from "react";
import useStyles from "./styles";
import memories from "./images/memories.png";

import { Posts, Form } from "./components";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {

	},[])

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img className={classes.image} src={memories} alt="icon" height="60" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts />
							{/* <Posts setCurrentId={setCurrentId} /> */}
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
							{/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
