import React from 'react';
import './App.css';
import Card from '../Card';
import CardsContainer from '../CardsContainer';
import Carousel from '../Carousel';
import BlogPostsGroup from '../BlogPostsGroup';

const feedbackData = require('../../feedback_data.json');
const blogPostsData = require('../../blog_posts.json');


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			carouselItems: [],
			blogPosts: [],
			visibleBlogPosts: false
		};
	}

	componentDidMount() {
		this.setState({
			carouselItems: feedbackData,
			blogPosts: blogPostsData
		});
	}

	toggleBlog() {
		this.setState({
			visibleBlogPosts: !this.state.visibleBlogPosts
		});
	}

	render () {
		const time = 0.15;
		const blogsAppearingTime = 1;

		const width = (
			window.innerWidth || 
  		    document.documentElement.clientWidth || 
  		    document.body.clientWidth
		);
		const path = (num) => `static/image/${width >= 1440 ? 'desktop' : 'mobile'}/img${num}.png`;

  		return (
  			<React.Fragment>
  				<Carousel 
  					time={time}
  					items={this.state.carouselItems}
  				/>
  				<h1>What's New?</h1>
  				<CardsContainer>
  					<Card 
  						to="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b"
  						caption="Instagram FAQ — All You Need To Know"
  						imgsrc={path(1)}
  					/>
  					<Card 
  						to="https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63"
  						caption="DMEXCO 2019 — Meet Combin in Cologne"
  						imgsrc={path(2)}
  					/>
  					<Card 
  						to="https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7"
  						caption="Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1"
  						imgsrc={path(3)}
  					/>
  				</CardsContainer>
  				<div className="read_more" onClick={() => this.toggleBlog()} >
  					Read More{" "}
  					<div 
  						className={"arrow"  + (this.state.visibleBlogPosts ? ' inversed' : '')}
  						style={{
  							transitionDuration: `${time}s`
  						}}
  					>
  					</div>
  				</div>
  				<BlogPostsGroup
  					time={blogsAppearingTime}
  					items={this.state.blogPosts}
  					visible={this.state.visibleBlogPosts}
  				/>	
  				}
  			</React.Fragment>
   		);
  	}
}

export default App;