import React from 'react';
import AppHeader from '../app-header';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search';
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css';
const App = ()=> {
    const data = [
        {label: 'I wish a good trip', important: true},
        {label: 'Going to learn React', important: false},
        {label: 'Im here', important: false}
    ]
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>    
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
    )
}


export default App;
