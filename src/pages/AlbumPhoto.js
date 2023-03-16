import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const api = "https://api.unsplash.com/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const navigate = useNavigate();
  console.log("傳入的參數", useParams());
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}/${id}?client_id=${accessId}`);
      console.log("Album", res.data);
      setPhoto(res.data);
    })();
  }, [id]);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        回上頁
      </button>
      這是單張圖片{id}
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} className="img-fluid" alt="" />
    </>
  );
}
