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
        {article.urlToImage ? (
          <img src={article.urlToImage} alt={article.title} />
        ) : (
          <div className="div_noImg">
            <img src="../../../public/no_img.png" alt="Kein Bild" />
            <p>Kein Bild vorhanden.</p>
          </div>
        )}
        <div className="wrapper_article_text">
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          <a href={article.url}>Zum Artikel</a>
        </div>
      </div>
    </>
  )
}
