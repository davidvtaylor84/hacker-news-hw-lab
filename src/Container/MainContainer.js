import React, { useState, useEffect } from 'react'
import StoryList from '../Components/StoryList'

const MainContainer = () => {
  const [newsListIds, setNewsListIds] = useState([])
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    const twentyPromises = fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    )
      .then((res) => res.json())
      .then((allIds) => allIds.slice(0, 20))
      .then((twentyIds) =>
        twentyIds.map((newsId, index) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
          ).then((res) => res.json())
        })
      )
    Promise.all(twentyPromises)
    .then((data) => {
        setNewsList(data)
        
    })
  }, [])

  return (
    <div>
      <h2>List</h2>
      <StoryList newsList={newsList} />
    </div>
  )
}

export default MainContainer
