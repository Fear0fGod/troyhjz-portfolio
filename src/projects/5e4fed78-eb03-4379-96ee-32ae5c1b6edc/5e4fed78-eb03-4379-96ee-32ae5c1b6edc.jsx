import React from 'react'
import './project.scss';
import { Navbar } from '../../components';

import Image1 from "./assets/strawberrystand.jpg"
import Image2 from "./assets/yogoodux.jpg"
import Image3 from "./assets/yogoodux2.jpg"
import Image4 from "./assets/strawberry.jpg"
import Image5 from "./assets/chocnut.jpg"
import Image6 from "./assets/wildberry.jpg"


const ShowcaseYogood = () => {
    return (
			<>
			<Navbar />
			<div className=" pad-1 margin-2">
				<h1 
					className="head-text" 
					style={{textTransform:"none", 
					justifyContent:"flex-start", 
					textAlign:"left"}}>
						<span>Yogood Yoghurt Bars</span>
				</h1>

			</div>

			<div className=" div__details pad-1">
				<div className=" col-3" >
					<p className="p-text">Client:</p>
					<p className="p-text">Yogood, Singapore Polytechnic</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Role:</p>
					<p className="p-text">Packaging UX, Photography, Photoshop </p>
				</div>
				<div className=" col-3">
					<p className="p-text">Date:</p>
					<p className="p-text">2021</p>
				</div>
			</div>

			<div className=" div__text pad-1">
				<p className="p-text">More about this project:</p>
				<p> My partner and I were tasked to refresh the packaging for Yogood. In Asian households, our mothers often repackage snacks into bowls as they are a sore sight. Thus, the objective was to create a solution that would make users want to show off the packaging, while making it easy to use.</p>
			</div>

				<div className="">
					<h2 className="pad-1" style = {{ textAlign:"left" }}>Showcase</h2>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image1}/>
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
					<p>I laid our the current user journey of a Yogood consumer</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image2}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Cut down the unnecessary steps, making the experience faster for the user.</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image4}/>
				</div>
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image5}/>
				</div>
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image6}/>
				</div>
				<div className="div__image_text pad-1">
					<p>3 flavours repackaged in total!</p>
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

export default ShowcaseYogood