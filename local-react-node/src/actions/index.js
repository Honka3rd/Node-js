import userlist from "../apis/jsonplaceholder";

export const postUsers = () => {
	return async function(dispatch) {
		const response = await userlist.get("posts");
		dispatch({ type: "POST", payload: response });
	};
};
