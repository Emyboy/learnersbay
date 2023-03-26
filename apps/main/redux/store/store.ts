import configureStore from './configure.store';
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';


const loadedState = loadState();

const store = configureStore(loadedState);


store.subscribe(() => {
    // console.log('STATE HAS CHANGED --')
    saveState({
        auth: store.getState().auth,
    });
})

export default store;
