import React from 'react'
import './project.scss';
import { Navbar } from '../../components';

import Image from "./assets/tmac.jpg";
import Image2 from "./assets/evan.jpg";
import Image3 from "./assets/ryan.jpg";




const ShowcaseAdidas = () => {
    return (
			<>
			<Navbar />
			<div className=" pad-1 margin-2">
				<h1 
					className="head-text" 
					style={{textTransform:"none", 
					justifyContent:"flex-start", 
					textAlign:"left"}}>
						<span>Always With You</span>
				</h1>

			</div>

			<div className=" div__details pad-1">
				<div className=" col-3" >
					<p className="p-text">Client:</p>
					<p className="p-text">Adidas, Singapore Polytechnic</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Role:</p>
					<p className="p-text">Photography, Illustrator, Photoshop</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Date:</p>
					<p className="p-text">2021</p>
				</div>
			</div>

			<div className=" div__text pad-1">
				<p className="p-text">More about this project:</p>
				<p>Being an avid basketball fan, I was excited to get the opportunity to create something sports-related. I wanted something that was bold and showed the energy of the athlete in my print series.</p>
			</div>

				<div className="">
					<h2 className="pad-1" style = {{ textAlign:"left" }}>Showcase</h2>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="TracyMcGrady" src={Image}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Conceptual Mockup</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="basketball" src={Image2}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Basketball Print Ad</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="soccer" src={Image3}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Soccer Print Ad</p>
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

export default ShowcaseAdidas