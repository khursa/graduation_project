import React, { Component } from 'react';
import './style.css';

class Blog_articles extends Component {

  windowDown(e) {
    document.querySelector(".open_post").classList.toggle("hidden");
  }

  render() {
    return (
      <div className="tab" id="articles">
        <ul className="list_articles">    
          <li className="preview articles_box">
            <div   href="#" id="articles_box">
              <h2 className="preview__title">Віддалене керування системою відеонагляду</h2>
              <p className="preview__text" >
              Мобільні пристрої тісно увійшли в життя сучасної людини. 
              В них зосереджено безліч мобільних додатків, які вирішують значний перелік завдань.
              Однією із таких можливостей є віддалений перегляд контролююємого об'єкту системою відеонагляду...
              </p>
              <span className="preview__more" onClick={this.windowDown}>Читати далі</span>
            </div>
            <div className="open_post hidden">

                    <p>
                      lalalalalallala
                      hahaha
                    </p>

          </div>
          </li>
          <li className="preview articles_box" >
            <div   href="#" id="articles_box">
              <h2 className="preview__title">"Хмарне" зберігання данних</h2>
              <p className="preview__text">Останнім часом все більшу популярніст отримує зберігання інформації в хмарних сервісах - 
              особливій моделі онлайн-зберігання. Ця модель базується на тому, що всі дані зберігаються в мережевому просторі без видимої прив'язки
              до конкретного серверу...
              </p>
              <span className="preview__more" onClick={this.windowDown}>Читати далі</span>
            </div>
            <div className="open_post hidden">

                    <p>
                      lalalalalallala
                      hahaha
                    </p>

          </div>
          </li>
          <li className="preview articles_box">
            <div   href="#" id="articles_box">
              <h2 className="preview__title">Доцільність використання альтернативних джерел енергетики на виробництві</h2>
              <p className="preview__text"> Біометричні системи доступу - це тип систем, які в якості ідентифікатора використовують 
              біометричні ознаки особи, а саме: підбиток пальця, сітківку ока, профіль облицця, тощо.
              Основною перевагою такої системи є укікальність ідентифікатора...
              </p>
              <span className="preview__more" onClick={this.windowDown}>Читати далі</span>
            </div>
            <div className="open_post hidden">

                    <p>
                      lalalalalallala
                      hahaha
                    </p>

          </div>
          </li>     
          <li className="preview articles_box">
            <div   href="#" id="articles_box">
              <h2 className="preview__title" >Правові аспекти встановлення системи відеонагляду</h2>
              <p className="preview__text">Питання законності встановлення системи відеонагляду в громадських місцях є досить актуальним.
              Особливої уваги воно оримало в останні роки, в зв'язку із значним поширенням систем безпеки в побуті...
              </p>
              <span className="preview__more" onClick={this.windowDown}>Читати далі</span>
            </div>
            <div className="open_post hidden">

                    <p>
                      lalalalalallala
                      hahaha
                    </p>

          </div>
          </li> 
          <li className="preview articles_box">
            <div   href="#"  id="articles_box">
              <h2 className="preview__title">Відмінність цифрових та оптичних зумів</h2>
              <p className="preview__text">Зумування - це процес, при якомувідображуване зображення збільшується до певного розміру на дисплеї.
              Цифровий зум, або цифрове збільшення - це процес звуженнявидимого кута зображення, при якому також здійснюється обрізання 
              із зберіганням пропорції відносно центральної облаті кадру
              </p>
            <span className="preview__more" onClick={this.windowDown}>Читати далі</span>
          </div>
            <div className="open_post hidden">

                    <a className="">
                      lalalalalallala
                      hahaha
                    </a>

            
          </div>
        </li>
      </ul>
    </div>
    );
  }
}

export default Blog_articles;

       			{/* 

			<div className="home hidden">

					<p>
						lalalalalallala
            hahaha
					</p>
          
      </div> */}