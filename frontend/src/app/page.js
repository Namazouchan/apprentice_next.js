"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  //index_action
  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/articles', {
        mode: 'cors',
        // メソッド『POST』指定するとデフォGET以外を使用できる
      })
    // fetch("http://127.0.0.1:3001/api/articles")
      // .then((res) => {
      //   return res.json();
      // })
      .then((data) => {
        // setArticles(data.articles);

        console.log('BBBBB')
        console.log(data.json())
      })
      // .then(() => {
      //   console.log('aaaaaa');
      // })
  }, []);

  //create_action http://127.0.0.1:3000　にアクセスしてするとpostリクエストが送信される。
  useEffect(() => {
    const articleData = {
      title: "Example",
      description: "test記事の説明",
      body: "test本文",
    };
  
    fetch('http://127.0.0.1:3001/api/articles', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }, []);

  //show_action　http://127.0.0.1:3000/articles/[:id] :idに対応したデータ表示
  useEffect(() => {
    const articleId = 1;

    fetch(`http://127.0.0.1:3001/api/articles/${articleId}`, {
      mode: 'cors',
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }, []); 

  //destroy_action 
  useEffect(() => {
    const articleId = 1;

    fetch(`http://127.0.0.1:3001/api/articles/${articleId}`, {
      mode: 'cors',
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }, []); 

  return (
    <main className={styles.main}>
      <h1>about</h1>
      {articles.map(article => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </article>
      ))}
    </main>
  );
}
