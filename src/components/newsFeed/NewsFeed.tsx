import React, { useEffect, useState } from "react"
import type { IArticle, INews } from "../../interfaces/INews"
import NewsArticle from "../newArticle/NewsArticle"

interface NewsFeedProps {
  news: INews | undefined
  setNews: React.Dispatch<React.SetStateAction<INews | undefined>>
}
export default function NewsFeed(news: NewsFeedProps) {
  return (
    <>
      <main>
        <section className="section_newsfeed">
          <h3>Neues aus der Welt</h3>
          {news ? (
            <>
              {news.news?.articles.map((article: IArticle, index: number) => {
                return (
                  <div className="news_box" key={index}>
                    <NewsArticle article={article} />
                  </div>
                )
              })}
            </>
          ) : (
            <>
              <p>Aktualisiere deinen Newsfeed mit der Suche 🔍</p>
            </>
          )}
        </section>
      </main>
    </>
  )
}
