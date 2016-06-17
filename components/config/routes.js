//require in
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route; //method of 
var Router = ReactRouter.Router; //method of 
var IndexRoute = ReactRouter.IndexRoute; //method of 
var hashHistory = ReactRouter.hashHistory; //to git rid of an error msg that keeps popping up 
//import {Router, Route, hashHistory, IndexRoute} from 'react-router';




//referencing Main
 var Index = require('./../index');
 var About = require('./../about');
 var Contact = require('./../contact');
 var Portfolio = require('./../portfolio');
 var Resume = require('./../resume');
 // instead of calling in routes
 // var routes = require('file')

//render the stuff   routes and the element we want to target    app
ReactDOM.render(
	//putting the router right here
	//structure for routes
	//how do we want to set up our views
	 (
	 <Router history={hashHistory}>
	 	<Route path='/' component={Index}>	
	 		<Route path='/About' component={About}/>
			<Route path='/Contact' component={Contact}/>
			<Route path='/Portfolio' component={Portfolio}/>
			<Route path='/Resume' component={Resume}/>
  		</Route>			
	   </Router>
	  ), 
	document.getElementById('app')
);