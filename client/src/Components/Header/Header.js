import { useContext, useState, useEffect } from 'react';
import AppContext from '../../Context/appContext';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TEMP from '../../assets/images/portfolio_landing_planet1.png';
import code from './code';
import './Header.scss';

const Header = props => {
    const { headerRightView, setHeaderRightView, headerLeftView, setHeaderLeftView, mobileView } = useContext(AppContext)
    const [justLoaded, setJustLoaded] = useState(true)

    const handleToggleLeftView = () => {
        setHeaderLeftView(true)
        setHeaderRightView(false)
    }

    const handleToggleRightView = () => {
        setHeaderRightView(true)
        setHeaderLeftView(false)
    }

    //This useEffect ensure both left and right slide in on load then alternate sliding from that point forward when a section is selected.
    useEffect(() => {
        if ((headerRightView || headerLeftView) && justLoaded) {
            setJustLoaded(false)
        }
    }, [headerRightView, headerLeftView, justLoaded])

    return (
        <header>
            <div className='header-inner-container'>
                <section id='header-left' className={`header-child ${headerRightView ? 'collapsed-shadow' : ''}`}>
                    <div
                        className='header-title-container'
                        onClick={() => handleToggleLeftView()}>
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
                        <div className={`landing-image-container ${justLoaded || headerLeftView ? 'slide-in-landing' : ''}`}>
                            <img id='brain' src={TEMP} alt='brain' />
                        </div>
                    </aside>
                </section>
                <section id='header-right' className={`header-child ${headerLeftView || justLoaded ? 'collapsed-shadow' : ''}`}>

                    <div
                        className='header-title-container'
                        onClick={() => handleToggleRightView()}>
                        <h1 className='title-end'>&gt; Web Developer</h1>
                        {(headerLeftView || justLoaded) && (
                            <div className='up-arrow-container arrow-container' >
                                <ExpandLessIcon />
                                <ExpandLessIcon />
                                <ExpandLessIcon />
                            </div>
                        )}
                    </div>
                    <aside
                        className={`header-content ${headerLeftView || justLoaded ? 'collapse-header-child-content' : ''}`}>
                        <pre className={`${justLoaded || headerRightView ? 'slide-in-code' : ''}`}>
                            {code}
                        </pre>
                    </aside>
                </section>
            </div>
        </header >
    )
}

export default Header;