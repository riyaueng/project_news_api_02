import type { IArticle, INews } from "../../interfaces/INews"
import NewsArticle from "../newArticle/NewsArticle"
import "./NewsFeed.css"

interface NewsFeedProps {
  news: INews | undefined
}
export default function NewsFeed({ news }: NewsFeedProps) {
  console.log(news)
  return (
    <>
      <main>
        <section className="section_newsfeed">
          <h3>Neues aus der Welt</h3>
          <div className="wrapper_newsfeed">
            {news ? (
              <>
                {news.articles.map((article: IArticle, index: number) => {
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
          </div>
        </section>
      </main>
    </>
  )
}
