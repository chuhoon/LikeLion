import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <BrowserRouter>
      <div className={styles.supportBox}>
        <span>Support Ukraine ๐บ๐ฆ </span>
        <a
          className={styles.supportLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine"
        >
          Help Provide Humanitarian Aid to Ukraine.
        </a>
      </div>
      <div className={styles.header}>
        <Link to="/" style={{ margin: '0 5px' }}>
          <span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="ํํ๋ฉด์ด๋"
              height="20"
            />
            <span>React</span>
          </span>
        </Link>
        <Link to="/one" style={{ margin: '0 5px' }}>
          ๋ฌธ์
        </Link>
        <Link to="/two" style={{ margin: '0 5px' }}>
          ์์ต์
        </Link>
        <Link to="/three" style={{ margin: '0 5px' }}>
          ๋ธ๋ก๊ทธ
        </Link>
        <Link to="/three" style={{ margin: '0 5px' }}>
          ์ปค๋ฎค๋ํฐ
        </Link>
        <Route path="/" />
        <Route path="/one" exact component={DocumentPage} />
        <Route path="/two" exact component={SelfStudy} />
        <Route path="/Three" exact component={Blog} />
        <Route path="/Four" exact component={Community} />
      </div>
    </BrowserRouter>
  );
  function DocumentPage() {
    return <h1>๋ฌธ์ํ</h1>;
  }
  function SelfStudy() {
    return <h1>์์ต์</h1>;
  }
  function Blog() {
    return <h1>๋ธ๋ก๊ทธ</h1>;
  }
  function Community() {
    return <h1>์ปค๋ฎค๋ํฐ</h1>;
  }
}

export default Header;
