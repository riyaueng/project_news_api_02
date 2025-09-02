import React, { useEffect, useState } from "react"
import "./Header.css"
import type { INews } from "../../interfaces/INews"

interface HeaderProps {
  news: INews | undefined
  setNews: React.Dispatch<React.SetStateAction<INews | undefined>>
}

export default function Header({ setNews }: HeaderProps) {
  const [BASE_URL] = useState<string>("https://newsapi.org/v2/everything?")
  const myKey = import.meta.env.VITE_api_key
  console.log(myKey)

  const [searchfield, setSearchfield] = useState<string>("")
  const [language, setLanguage] = useState<string>("de")
  const [sorted, setSorted] = useState<string>("relevancy")

  // URL-Ergänzung für BASE_URL
  const searchfieldValue = `q=${searchfield}`
  const languageValue = `language=${language}`
  const sortedValue = `sortBy=${sorted}`
  const url = `${BASE_URL}${searchfieldValue}&${sortedValue}${languageValue}&apiKey=${myKey}`

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const resp = await fetch(url)
      const respInJson = await resp.json()
      if (respInJson.articles) {
        setNews(respInJson)
      }
    }
    if (searchfield.length > 2) {
      fetchData()
    }
  }, [url])

  return (
    <>
      <header>
        <section className="section_navigation">
          <h2>Newspaper 📰</h2>
          <nav>
            <form className="form_search">
              <div className="div_searchfield">
                <input
                  type="text"
                  id="searchfield"
                  placeholder="Suchbegriff"
                  onChange={(event) => setSearchfield(event.target.value)}
                />
              </div>
              <div className="div_select_language">
                <select name="language" id="language" onChange={(event) => setLanguage(event.target.value)}>
                  <option value="language" disabled>
                    Sprache wählen
                  </option>
                  <option value="ar">Arabic</option>
                  <option value="de">German</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="he">Hebrew</option>
                  <option value="it">Italien</option>
                  <option value="nl">Dutch</option>
                  <option value="no">Norwegian</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="sv">Swedish</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>

              <div className="div_sort">
                <select name="sort" id="sort">
                  <option value="relevancy">Relevanz</option>
                  <option value="popularity">Popularität</option>
                  <option value="puplishedAt">Neueste zuerst</option>
                </select>
              </div>
              <button type="submit" className="btn_search">
                Suchen
              </button>
            </form>
          </nav>
        </section>
      </header>
    </>
  )
}
