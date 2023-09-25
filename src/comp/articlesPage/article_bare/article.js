import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from 'react-router-dom';
import Img from '../../../images/user.png'
function article({ data }) {
  const {
    id,
    title,
    tag_list,
    Authors,
    publication_history,
  } = data;
  //  {
  //   title: 'Hello My World',
  //   cover_image: 'https://i.ibb.co/fDjYxyY/tom-hardy.jpg',
  //   tag_list: ["sql", "c++", "react"],
  //   url: 'https://web.facebook.com/',
  //   user: {
  //     username: 'issame_el',
  //     profile_image_90: 'https://i.ibb.co/fDjYxyY/tom-hardy.jpg',
  //   }
  // published_at: '2022/10/2',
  // };
  return (
    <article className="article">
      {/* {cover_image && (
        <a
          href={url}
          className="article__image"
          style={{
            backgroundImage: `url(${cover_image})`
          }}
        >
          &nbsp;
        </a>
      )} */}
      <div className="article__details">
        <div className="u-pic">
          <img src={Img} alt="" />
        </div>
        <div className="u-details">
          <a >
            {Authors && Authors.length > 1 && <span className="u-name">{Authors[1] + " and more..."}</span>}
            {Authors && Authors.length == 1 && <span className="u-name">{Authors[1]}</span>}

          </a>
          <a >
            <span className="time">
              {new Date(publication_history).toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
              })}
              &nbsp;
              {dayjs.extend(relativeTime)}
              ({dayjs(publication_history).fromNow()})
            </span>
          </a>

          <a >
            <h3>{title}</h3>
          </a>

          <div className="tags">
            {tag_list.map((tag, id) => {
              return (
                <a key={id} href={`https://dev.to/t/${tag}`}>
                  <span className="tag">#{tag}</span>
                </a>
              );
            })}
          </div>

          <div className="additional-details">
            {/* <div className="reactions">
                {public_reactions_count + positive_reactions_count > 0 && (
                  <a href={url}>
                    <span>
                      <i>
                        <BiHeart />
                      </i>
                      &nbsp;
                      {public_reactions_count + positive_reactions_count} &nbsp;
                      <span className="hidden-mobile">reactions</span>
                    </span>
                  </a>
                )}
  
                <a href={url}>
                  <span>
                    <i>
                      <FaRegComment />
                    </i>
                    &nbsp;
                    {comments_count > 0 ? (
                      <span>
                        {comments_count} &nbsp;
                        <span className="hidden-mobile">comments</span>
                      </span>
                    ) : null}
                    {comments_count === 0 ? (
                      <span>
                        <span className="show-mobile">{comments_count}</span>
                        &nbsp;
                        <span className="hidden-mobile">Add comment</span>
                      </span>
                    ) : null}
                  </span>
                </a>
              </div> */}

            <div className="save">
              <small>1 min read</small>
              <Link to={"/Articles/" + id}>
                <button onClick={() => {
                  document.querySelector('.bg-popup').classList.add('show');
                  document.body.style.overflow = "hidden";
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}>Open</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default article