import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/alokofficial")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const data = useLoaderData();
  return (
    <div className="flex justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img src={data.avatar_url} alt="Git picture" width={300} />
      <h1>Github Followers: {data.followers}</h1>
    </div>
  );
}

export const githubInfoLoader= async () => {
  const response = await fetch("https://api.github.com/users/alokofficial")
  return response.json()
}
