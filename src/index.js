import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import renderTree from './renderTree';

renderTree(store);

store.subscribe(renderTree);

reportWebVitals();
