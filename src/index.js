import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { func, subscribe } from './redux/state'
import renderTree from './renderTree';

renderTree(state, func);

subscribe(renderTree);

reportWebVitals();
