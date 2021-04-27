

function FoterComponent(props){
    return <footer>
        <div className={'footer-cooperation'}>
            <div className={'container'}>
                <div className={'footer__container-text'}>
                    <p><span className={'footer__copy-sumbol'}>©</span>{props.create}</p>
                    <p className={'footer__text style-text'}>{props.year}</p>
                </div>
            </div>
        </div>
    </footer>
}

export  default FoterComponent;