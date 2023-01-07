import { useState, useEffect } from "react";
    
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({});
  
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json.data)
    setData(json.data);
    setLoading(false);
  }
 
  useEffect(() => {
    fetchUrl();
    return () => {
      setState({}); // This worked for me
    };
  }, []);
 
  return [data, loading];
}

 export { useFetch };