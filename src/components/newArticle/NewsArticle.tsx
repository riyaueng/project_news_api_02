import React from "react"
import type { IArticle } from "../../interfaces/INews"
import "./NewsArticle.css"

interface ArticleProps {
  article: IArticle
}

export default function NewsArticle({ article }: ArticleProps) {
  return (
    <>
      <div className="div_news_article">
        <img src={article.urlToImage ? article.urlToImage : "Kein Bild vorhanden."} alt={article.title} />
        <div className="wrapper_article_text">
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          <a href={article.url}>Zum Artikel</a>
        </div>
      </div>
    </>
  )
}
