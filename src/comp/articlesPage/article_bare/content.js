import React, { useEffect, useState } from 'react'
import Artc1 from './article'
import LoadArticle from './Loadarticl'
import './article_bare.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux'

function Content() {
  const [Articles, setArticles] = useState(null);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);
  let { articles } = useSelector(state => state.articles);
  useEffect(() => {
    setTimeout(async () => {
      // const res = await fetch('https://dev.to/api/articles?page=1');
      const res = await fetch('http://localhost:8000/articles?_limit=4&_page=1');
      const data = await res.json();
      setArticles(data);
      if (articles.length > 0) {
        setArticles(articles)
      }
    }, 2000);

  }, [])
  const fetchArticles = async () => {
    // const res = await fetch('https://dev.to/api/articles?page=' + page);
    const res = await fetch('http://localhost:8000/articles?_limit=4&_page=' + page);
    const data = await res.json();
    return data;
  };
  const fetchData = async () => {
    const articleFromServer = await fetchArticles();
    setArticles([...Articles, ...articleFromServer])
    if (articleFromServer.length === 0) {
      sethasMore(false)
    }
    setpage(page + 1)
  };
  // console.log(Articles)
  return (
    <div className="main-content">
      <header>
        <h1>Articles</h1>
        <div className='nav'>
          <a>Feed</a>
          <a>Week</a>
          <a>Month</a>
          <a>Infinity</a>
          <a>Latest</a>
        </div>

      </header>
      {Articles && <InfiniteScroll
        dataLength={Articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<div className="loader "><div className="circle"></div> <div className="circle"></div> <div className="circle"></div></div>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }

      >
        <div className="articles">
          {
            articles.length === 0 ? (Articles && Articles.map((article, id) => {
              return <Artc1 key={id} data={article} />;
            })) : (articles && articles.map((article, id) => {
              return <Artc1 key={id} data={article} />;
            }))

          }

        </div>
      </InfiniteScroll>
      }
      {!Articles && [1, 2, 3, 4, 5].map((a) => <LoadArticle key={a} />)}
    </div>
  )
}

export default Content