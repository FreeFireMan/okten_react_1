function FoterComponent(props){
    const { create, year } = props.footer;

    return <footer>
        <div className={'footer-cooperation'}>
            <div className={'container'}>
                <div className={'footer__container-text'}>
                    <p className={'footer__copy-sumbol'}>© Creat {create}</p>
                    <p className={'footer__text style-text'}>{year}</p>
                </div>
            </div>
        </div>
    </footer>
}

export  default FoterComponent;
