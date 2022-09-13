import React, {useState , useEffect}  from "react"
import StoryList from "../Components/StoryList"

const MainContainer =() => {
    const [newsList , setNewsList] = useState ([])
    const [selectedNewsItem ,setSelectedNewsItem ] =useState (null)
    
    useEffect (() =>{
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then((res) => res.json())
        .then((allIds) => allIds.slice(0 ,20))
        .then(data => setNewsList(data))
    }, [])


        useEffect (() =>{
        fetch(`https://hacker-news.firebaseio.com/v0/item/${NewsId}.json`)
        .then((res) => res.json())



    return(
        <div>
            <h2>List</h2>
        <StoryList newsList={newsList}/>
        </div>
    )





} 

export default MainContainer