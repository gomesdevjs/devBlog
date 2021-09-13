import React from "react";
import Posts from "../Posts";

// import { Container } from './styles';

function Articles() {
  // Request data to API

  return (
    <section className="container border">
      <h1>Article</h1>
      <div className="containerPosts">
        <Posts subtitle="tecnologia" title="O guia definititivo sobre o blog" />
        <Posts
          subtitle="fotografia"
          title="Quais as melhores cameras para 2022?"
        />
        <Posts subtitle="cinema" title="Os 10 filmes com maior bilheteria" />
      </div>
    </section>
  );
}

export default Articles;
