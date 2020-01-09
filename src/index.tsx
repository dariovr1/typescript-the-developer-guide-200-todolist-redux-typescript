import React from 'react';
import ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import store  from '../src/store/index';
import {Todos} from './components/Todo';

const App : React.FC = () => (
    <Provider store={store}>
        <Todos />
    </Provider>
);


ReactDOM.render(
<App />,
document.querySelector('#root')
);