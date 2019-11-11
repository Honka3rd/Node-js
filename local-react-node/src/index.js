import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import bundledReducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import IO from "./io";

const App = () => {
	return (
		<div>
			<IO />
		</div>
	);
};

ReactDOM.render(
	<Provider store={createStore(bundledReducers, applyMiddleware(thunk))}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
