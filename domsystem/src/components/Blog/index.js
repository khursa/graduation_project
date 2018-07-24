import React, { Component } from 'react';
import Blog_figure from './Blog_figure';
import Blog_header from './Blog_header';
import Blog_articles from './Blog_articles';
import Blog_categories from './Blog_categories';
import './style.css';

let tabs = (() => {
  let s;

  return {
    settings: {
      tabs: document.getElementsByClassName('tabs__item'),
      tab: document.getElementsByClassName('tab')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.click();
    },

    display: function() {
      if (s.tab.length) {
        [].forEach.call(s.tab, function(tab) {
          tab.style.display = 'none';
        });
        s.tab[0].style.display = 'block';
        s.tab[0].classList.add('active');
        s.tabs[0].classList.add('active');
      }
    },

    click: function() {
      if (s.tabs.length) {
        let currentIdx = 0,
            prevIdx = currentIdx;

        [].forEach.call(s.tabs, function(tab, idx) {
          tab.addEventListener('click', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.tab[prevIdx].style.display = 'none';
              s.tab[prevIdx].classList.remove('active');
              s.tabs[prevIdx].classList.remove('active');
              s.tab[currentIdx].style.display = 'block';
              s.tab[currentIdx].classList.add('active');
              s.tabs[currentIdx].classList.add('active');
            }
          });
        });
      }
    }
  }
})();


let preview = (() => {
  let s;

  return {
    settings: {
      img: document.getElementsByClassName('preview__img'),
      post: document.getElementsByClassName('preview')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.mouseenter();
    },

    display: function() {
      if (s.img.length) {
        [].forEach.call(s.img, function(img) {
          img.style.display = 'none';
        });
        s.img[0].style.display = 'block';
      }
    },

    mouseenter: function() {
      if (s.post.length) {
        let currentIdx = 0,
            prevIdx = currentIdx;

        [].forEach.call(s.post, function(preview, idx) {
          preview.addEventListener('mouseenter', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.img[prevIdx].style.display = 'none';
              s.img[currentIdx].style.display = 'block';
            }
          });
        });
      }
    }
  }
})();




class Blog extends Component {

componentDidMount() {
  tabs.init();
  preview.init();
}

  render() {
    return (
      <section className="blog parallax parallax-blog section" id='6'>
        <section className="previews" id="blog_flexcontainer">
          <Blog_figure />
          <div>
            <Blog_header />
            <Blog_articles />
            <Blog_categories />
          </div>
        </section>
      </section>
    );
  }
}

export default Blog;