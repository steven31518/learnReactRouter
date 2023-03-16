import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import List from "../components/List";
import axios from "axios";
const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumSearch() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  //   useEffect(() => {
  //     console.log(searchParams.get("query")); //取出
  //     setSearchParams({ query: "building", user: "222008" });
  //   }, []);
  useEffect(() => {
    if (search !== "") {
      (async () => {
        const response = await axios.get(
          `${api}?client_id=${accessId}&query=${search}`
        );
        const { results } = response.data;
        //   console.log(results);
        setList(results);
      })();
    }
  }, [search]);

  useEffect(() => {
    setSearch(searchParams.get("query"));
  }, [searchParams]);
  return (
    <>
      Enter Key word:{search}
      <input
        type="text"
        className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            console.log("as");
            setSearchParams({ query: e.target.value });
          }
        }}
      />
      <List list={list} />
    </>
  );
}
