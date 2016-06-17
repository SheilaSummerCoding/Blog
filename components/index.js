//AnimalApp
//to determine if this has children look to see who else it is rendering - there are three of them including Toggler they are siblings and children of AnimalApp
	//AllAnimalsData
		//AllAnimals
			//AnimalCard
	//AnimalPostData
		//AnimalPostForm
	//Toggler



var React = require('react');
var Link = require('react-router').Link; //lets us link on the buttons

var Index = React.createClass({
	render: function(){
		return (
			<div>
				<div>
				
				<Link to='/'> 
						<a className="">Index</a>
					</Link>
					<Link to='/About'>
						<a className="">About</a>
					</Link>
					<Link to="/Contact">
						<a className="">Contact</a>
					</Link>	
					<Link to="/Portfolio">
						<a className="">Portfolio</a>
					</Link>	
					<Link to="/Resume">
						<a className="">Resume</a>
					</Link>	
					{this.props.children}
				</div>	
			</div>
			)
	}
});

module.exports = Index;