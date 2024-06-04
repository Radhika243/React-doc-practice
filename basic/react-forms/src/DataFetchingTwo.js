import React, { useEffect, useReducer,useState } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  posts: {},
  error: "",
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        //...state,
        loading: false,
        posts: action.payload,
        error: "",
      };

    case "FETCH_FAILURE":
      return {
        //...state,
        loading: false,
        posts: {},
        error: "Something went wrong!!",
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [id,setId] = useState(1)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/"+id)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, [id]);

  return (
    <>
      <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
      {state.loading ? "Loading..." : state.posts.title}
    </>
  );
}

export default DataFetchingTwo;
