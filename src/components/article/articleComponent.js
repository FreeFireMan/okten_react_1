function ArticleComponent(props) {
    const {linksImg, title, article} = props.article;

    return (
        <div className={'content-block__item'}>
            <div className={'content-block__wraper'}>
                <div className={'content-block__img'}>
                    <img src={linksImg} alt="img"/>
                </div>

                <div className={'content-block__title'}>
                    <p>{title}</p>
                </div>

                <div className={'content-block__list'}>
                    <ul className={'content-block__ul'}>
                        <li>{article} </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArticleComponent;
