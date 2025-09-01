import React from "react"
import type { IArticle, INews } from "../../interfaces/INews"

interface ArticleProps {
  article: IArticle
}

export default function NewsArticle(article: ArticleProps) {
  return (
    <>
      <div className="div_news_article">
        <img
          src={article.article.urlToImage ? article.article.urlToImage : "Kein Bild vorhanden."}
          alt={article.article.title}
        />
        <div className="wrapper_article_text">
          <h3>{article.article.title}</h3>
          <p>{article.article.description}</p>
          <a href={article.article.url}>Zum Artikel</a>
        </div>
      </div>
    </>
  )
}
