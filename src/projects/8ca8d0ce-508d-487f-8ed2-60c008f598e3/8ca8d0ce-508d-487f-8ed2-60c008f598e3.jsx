import React from 'react'
import './project.scss';
import { Navbar } from '../../components';

import ice from "./assets/icecream.jpg";
import milk from "./assets/milk.jpg";
import site1 from "./assets/site1.png";
import site2 from "./assets/site2.jpg";
import site3 from "./assets/site3.jpg";
import site4 from "./assets/site4.jpg";



const ShowcaseWhatIf = () => {
    return (
			<>
			<Navbar />
			<div className=" pad-1 margin-2">
				<h1 
					className="head-text" 
					style={{textTransform:"none", 
					justifyContent:"flex-start", 
					textAlign:"left"}}>
						<span>WhatIF Foods</span>
				</h1>

			</div>

			<div className=" div__details pad-1">
				<div className=" col-3" >
					<p className="p-text">Client:</p>
					<p className="p-text">WhatIF Foods</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Role:</p>
					<p className="p-text">UI/UX, Illustrator, Photoshop, Graphic Design, Photography</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Date:</p>
					<p className="p-text">2022</p>
				</div>
			</div>

			<div className=" div__text pad-1">
				<p className="p-text">More about this project:</p>
				<p>For this project, we had to work with a real client, WhatIF Foods! They wanted us to refresh their milk packaging, and target younger audiences. Additionally, I felt that their website user experience could be improved significantly. I created a website mockup using AdobeXD to simulate my suggested purchasing experience. I was also in charge of creating the packaging design and graphics for this project.</p>
			</div>

				<div className="">
					<h2 className="pad-1" style = {{ textAlign:"left" }}>Showcase</h2>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="nuzzle1" src={ice}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Suggested Ice Cream packaging. A push pop experience!</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="nuzzle1" src={milk}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Refreshed milk packaging look</p>
				</div>
			</div>
			

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="nuzzle1" src={site1}/>
				</div>
				<div className="div__image_text pad-1">
					<p>I wanted the home page to be accessible to both existing consumers and new consumers. Hence if an existing consumer knows what they want, they can click shop all to view their favourite products. On the other hand, a new user can scroll down to learn more.</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="nuzzle1" src={site4}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Users would scroll down to read more about the brand and see the products they offer.</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="nuzzle1" src={site2}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Purchasing page. Concise and clear for consumers new or existing.</p>
				</div>
			</div>

			<div className=" div__button pad-1">
			<a href="/#works">
					<button className="button__link" >
						Back
					</button>
			</a>
			</div>
			</>
    )
}

export default ShowcaseWhatIf