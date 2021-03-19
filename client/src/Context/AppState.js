import { useState } from 'react';
import AppContext from './appContext';

const AppState = props => {
    const [test] = useState('test')
    return (
        <AppContext.Provider
            value={{
                test
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;