import api from "../../services/api";
import Posts from "../../Components/Posts";
import { useState, useEffect } from "react";

const Main = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <section className="container">
      <h3 className="mt-3">Artigos</h3>

      <div className=" flex mt-5 container-posts">
        {post.map((post) => {
          return (
            <>
              <Posts
                subtitle={post.category}
                title={post.title}
                author={post.author}
                date={post.date}
              >
                {post.resume}
              </Posts>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
