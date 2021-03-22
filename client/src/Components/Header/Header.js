import { useContext, useState, useEffect } from 'react';
import AppContext from '../../Context/appContext';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TEMP from '../../assets/images/portfolio_landing_planet1.png';
import code from './code';
import './Header.scss';

const Header = props => {
    const { headerRightView, setHeaderRightView, mobileView } = useContext(AppContext)
    const [justLoaded, setJustLoaded] = useState(true)

    //This useEffect ensure both left and right slide in on load then alternate sliding from that point forward when a section is selected.
    useEffect(() => {
        if (headerRightView) {
            if (justLoaded) {
                setJustLoaded(false)
            }
        }
    }, [headerRightView, justLoaded])

    return (
        <header>
            <div className='header-inner-container'>
                <section id='header-left' className={`header-child ${headerRightView ? 'collapsed-shadow' : ''}`}>
                    <div
                        className='header-title-container'
                        onClick={() => setHeaderRightView(false)}>
                        <h1 className='title-start'>
                            Stuart Ernstsen &lt;
                        </h1>
                        {headerRightView && (
                            <div className='down-arrow-container arrow-container' >
                                <ExpandMoreIcon />
                                <ExpandMoreIcon />
                                <ExpandMoreIcon />
                            </div>
                        )}
                    </div>
                    <aside className={`header-content ${headerRightView ? 'collapse-header-child-content' : ''}`}>
                        <div className={`landing-image-container ${!headerRightView ? 'slide-in-landing' : ''}`}>
                            <img id='brain' src={TEMP} alt='brain' />
                        </div>
                    </aside>
                </section>
                <section id='header-right' className={`header-child ${!headerRightView ? 'collapsed-shadow' : ''}`}>

                    <div
                        className='header-title-container'
                        onClick={() => setHeaderRightView(true)}>
                        <h1 className='title-end'>&gt; Web Developer</h1>
                        {!headerRightView && (
                            <div className='up-arrow-container arrow-container' >
                                <ExpandLessIcon />
                                <ExpandLessIcon />
                                <ExpandLessIcon />
                            </div>
                        )}
                    </div>
                    <aside
                        className={`header-content ${headerRightView ? '' : 'collapse-header-child-content'}`}>
                        <pre className={`${headerRightView || (!mobileView && justLoaded) ? 'slide-in-code' : ''}`}>
                            {code}
                        </pre>
                    </aside>
                </section>
            </div>
        </header >
    )
}

export default Header;