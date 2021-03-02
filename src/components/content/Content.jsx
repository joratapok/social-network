import React from 'react';
import classes from './Content.module.css'

import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Route} from "react-router-dom";
import MyPosts from "./myPosts/MyPosts";

const Content = (props) => {
    return(
        <div className={classes.wrap}>
            <Route path='/profile' render={ () => <MyPosts posts={props.data.posts}/> } />
            <Route path='/dialogs' render={ () => <Dialogs dialogs={props.data.dialogs} people={props.data.people}/> } />
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
    )
}

export default Content;

