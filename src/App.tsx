import React from 'react';
import './App.css';
import ArticleComponent from "./components/article/articleComponent";
import './components/article/articleComponent.css'
import HeaderComponent from "./components/headerComponent/headerComponent";
import TitleBoxComponent from "./components/TitelBoxComponent/TitleBoxComponent";
import FoterComponent from "./components/foterComponent/FoterComponent";

const data = {
    header: {
        title: 'Сер Ві́нстон Леонард Спенсер-Че́рчилль',
        content: 'Розумна людина не робить сама всі помилки – вона дає шанс й іншим.'
    },
    title: {
        h1: 'Мудрі й проникливі цитати сера Вінстона Черчілля',
        signature: 'signature',
    },
    articles: [
        {
            linksImg: 'https://icdn.lenta.ru/images/2019/09/07/18/20190907182940553/square_320_4a4daec12981891d5b0270fe7a4de168.jpg',
            title: 'Цитати про рішучість',
            article: 'Якщо ви йдете крізь пекло – ідіть, не зупиняючись.'
        },
        {
            linksImg: 'https://icdn.lenta.ru/images/2019/09/07/18/20190907182940553/square_320_4a4daec12981891d5b0270fe7a4de168.jpg',
            title: 'Цитати про позицію',
            article: 'У тебе є вороги? Добре. Отже, в своєму житті ти щось колись відстоював.'
        },
        {
            linksImg: 'https://icdn.lenta.ru/images/2019/09/07/18/20190907182940553/square_320_4a4daec12981891d5b0270fe7a4de168.jpg',
            title: 'Цитати про успіх ',
            article: 'Успіх – це здатність крокувати від однієї невдачі до іншої, не втрачаючи ентузіазму.',
        },
        {
            linksImg: 'https://icdn.lenta.ru/images/2019/09/07/18/20190907182940553/square_320_4a4daec12981891d5b0270fe7a4de168.jpg',
            title: 'Цитати про можливості',
            article: 'Будь-яка криза – це нові можливості.'
        }
    ],
    footer: {
        create: 'Creat Petriv Yaroslav',
        year: '2021'
    }
}

function App() {
    const {header, title, articles, footer} = data;

    return (
        <div>
            <HeaderComponent header={header}/>
            <TitleBoxComponent title={title}/>
            <div className={'content-block'}>
                <div className={'container'}>
                    <div className={'content-block__items'}>
                        {articles.map(value => {
                            return <ArticleComponent article={value}/>
                        })}
                    </div>
                </div>
            </div>
            <FoterComponent footer={footer}/>
        </div>
    );
}

export default App;
