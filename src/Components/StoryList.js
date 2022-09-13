import React from "react";
import NewsListItem from "./NewsListItem";


const StoryList = ({newsList}) => {

const newItems = newsList.map((item, index) => {
    return <NewsListItem key={index} item={item}/> 
})


return (
    <div>
        <ul>
            {newItems}
        </ul>
    </div>
)

}




export default StoryList