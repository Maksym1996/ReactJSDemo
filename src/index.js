import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store/store';
import renderTree from './renderTree';

renderTree(store);

store.subscribe(() => {
    renderTree(store);
});

reportWebVitals();
