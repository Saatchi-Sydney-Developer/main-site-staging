import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState([]);
  let data = [];

  const getPostData = () => {
    fetch("../data/fakeData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        setIsLoading(() => false);
        setPostData(() => myJson);
        
        // console.log(myJson, "this is data", postData);
      });

      
  };

  useEffect(() => {
    if(isLoading) {
      data = getPostData(); 
    } else {
      console.log("useeffect", postData);
      console.log(id);
    }

  }, [postData]);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  
  // console.log(props);

  return <>{!isLoading && 
  <div>
    <div>Post {id}</div>
    <button  onClick={handleClick}>we are leaving</button>
  </div>}</>;
};

export default Post;
