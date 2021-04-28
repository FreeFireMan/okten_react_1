function TitleBoxComponent(props) {
    const {h1, signature} = props.title;

    return (
        <div className={'title-box'}>
            <div className={'container'}>
                <h2 className={'title-box__title'}>{h1}</h2>
                <p className={'title-box__content style-text'}>{signature}</p>
            </div>
        </div>
    )
}

export default TitleBoxComponent;
