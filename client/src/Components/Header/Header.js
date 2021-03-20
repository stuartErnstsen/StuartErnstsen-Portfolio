import code from './code';
import './Header.scss';

const Header = props => {
    return (
        <header>
            <div className='header-inner-container'>
                <section id='header-left' className='header-child'>
                    <div className='header-title-container'>
                        <h1 className='title-start'>
                            Stuart Ernstsen &lt;
                        </h1>
                    </div>
                    <aside className='header-info'>

                    </aside>
                </section>
                <section id='header-right' className='header-child'>
                    <div className='header-title-container'>
                        <h1 className='title-end'>&gt; Web Developer</h1>
                    </div>
                    <aside className='header-info'>
                        <pre>
                            {code}
                        </pre>
                    </aside>
                </section>
            </div>
        </header>
    )
}

export default Header;