function HeaderComponent(props) {
    const {title, content} = props.header;

    return (
        <div className={'header'}>
            <div className={'header_content'}>
                <div className={'header__title'}>
                    <h1 className={'header__title-style'}>{title}</h1>
                </div>

                <div className={'header__content'}>
                    <p className={'style-text  style-text__font-size--l'}>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;
