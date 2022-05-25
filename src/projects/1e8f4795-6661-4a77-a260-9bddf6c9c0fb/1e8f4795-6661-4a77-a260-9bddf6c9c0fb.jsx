import React from 'react'
import './project.scss';
import { Navbar } from '../../components';
import Image from "./assets/nuzzle-1.jpg";
import Image2 from "./assets/nuzzle-2.jpg";
import Image3 from "./assets/nuzzle-3.jpg";


const ShowcaseNuzzle = () => {
    return (
			<>
			<Navbar />
			<div className=" pad-1 margin-2">
				<h1 
					className="head-text" 
					style={{textTransform:"none", 
					justifyContent:"flex-start", 
					textAlign:"left"}}>
						<span>Nuzzle Pillows</span>
				</h1>

			</div>

			<div className=" div__details pad-1">
				<div className=" col-3" >
					<p className="p-text">Client:</p>
					<p className="p-text">Nuzzle, Singapore Polytechnic</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Role:</p>
					<p className="p-text">Photoshop, Illustrator</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Date:</p>
					<p className="p-text">2021</p>
				</div>
			</div>

			<div className=" div__text pad-1">
				<p className="p-text">More about this project:</p>
				<p>For this project, we had to choose a startup product on crowdfunding platforms (Kickstarter and IndieGoGo). My group chose Nuzzle, a pillow company that creates pillows that are out of this world. What sets their product apart from the rest on the market is that they combine many features into one. More than anything else, who doesn’t use a pillow?</p>
			</div>

				<div className="">
					<h2 className="pad-1" style = {{ textAlign:"left" }}>Showcase</h2>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image2}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Enter Another Dimension</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image3}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Sleep Under the Sun</p>
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

export default ShowcaseNuzzle