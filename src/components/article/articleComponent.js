import React from "react";


function ArticleComponent(props) {
    return <div className={'content-block__item'}>
        <div className={'content-block__wraper'}>
            <div className={'content-block__img'}>
                <img
                    src={props.linksImg}
                    alt="img"/>
            </div>
            <div className={'content-block__title'}>
                <p>{props.title}</p>
            </div>
            <div className={'content-block__list'}>
                <ul className={'content-block__ul'}>
                    <li>{props.article} </li>
                </ul>
            </div>
        </div>
    </div>
}


export default ArticleComponent;