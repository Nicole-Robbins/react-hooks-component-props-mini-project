import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const list = posts.map((b) => {
        return <Article key={b.id} title={b.title} date={b.date} preview={b.preview}/>;
    });
  
    return (
    <main>
        {list}
    </main>
    );
}

export default ArticleList;