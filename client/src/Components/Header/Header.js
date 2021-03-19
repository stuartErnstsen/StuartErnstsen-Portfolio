import './Header.scss';

const Header = props => {
    return (
        <header>
            <div className='header-inner-container'>
                <section className='header-left'>
                    <h1 className='header-title'>
                        <span>Stuart Ernstsen /</span>
                        <span className='title-end'>/ web developer</span>
                    </h1>
                    <aside className='header-info'>
                        <div className='header-info-child header-info-keys'>
                            <h4>Location :</h4>
                            <h4>Email :</h4>
                            <h4>Github :</h4>
                            <h4>Linkedin :</h4>
                        </div>
                        <div className='header-info-child header-info-values'>
                            <h4>Salt Lake City, Utah</h4>
                            <h4>StuartErnstsen@gmail.com</h4>
                            <h4>StuartErnsten</h4>
                            <h4>/in/stuart-ernstsen/</h4>
                        </div>
                    </aside>
                </section>
                <section className='header-right'>

                </section>
            </div>
        </header>
    )
}

export default Header;