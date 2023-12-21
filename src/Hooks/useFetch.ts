import { useEffect, useState } from "react";

const useFetch = (url:string) => {
  const [res,setRes]= useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}`);
        if (response.ok) {
          const data = await response.json();
          setRes(data)
        } else {
          throw new Error("failed");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return {res}
};

export default useFetch;