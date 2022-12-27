import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route} from 'react-router-dom'
import Slug from './component/Slug';
import Article from './component/Article';
import Author from './component/Help';

ReactDOM.render(
<BrowserRouter>

<Route path='/author'>
            <Author/>
        </Route>

<Route path='/slug'>
<Slug/>
</Route>


<Route path='/article'>
<Article/>
</Route>


<Route path="/" exact>
<App/>
</Route>

</BrowserRouter>,
document.getElementById('root')
)
