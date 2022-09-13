import React from "react";
import NewsListItem from "./NewsListItem";



const StoryList = ({newsList}) => {
    const newsHeadlines = newsList.map((newsId, index) =>{
        return <NewsListItem key={index} newsId ={newsId}/>
    })


return (
    <div>
        <ul>
            {newsHeadlines}
        </ul>
    </div>
)

}




export default StoryList