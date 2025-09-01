import React, { useState } from "react"
import Header from "../../components/header/Header"
import NewsFeed from "../../components/newsFeed/NewsFeed"
import "./Home.css"
import type { IArticle, INews } from "../../interfaces/INews"

export default function Home() {
  const [news, setNews] = useState<INews>()

  return (
    <>
      <Header news={news} setNews={setNews} />
      <NewsFeed news={news} setNews={setNews} />
    </>
  )
}
