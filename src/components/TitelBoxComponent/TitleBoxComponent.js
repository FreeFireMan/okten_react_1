
function TitleBoxComponent(props){
    return <div className={'title-box'}>
        <div className={'container'}>
            <h2 className={'title-box__title'}>{props.h1}</h2>
            <p className={'title-box__content style-text'}>{props.signature}</p>
        </div>
    </div>
}


export default TitleBoxComponent;