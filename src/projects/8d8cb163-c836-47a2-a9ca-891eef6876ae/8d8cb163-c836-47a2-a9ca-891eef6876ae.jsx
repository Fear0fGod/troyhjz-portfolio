import React from 'react'
import './project.scss';
import { Navbar } from '../../components';

import Image from "./assets/IW1.jpg";
import Image2 from "./assets/IW2.jpg";
import Image3 from "./assets/IW3.jpg";
import Image4 from "./assets/IW4.jpg";
import Image5 from "./assets/ChildsBlueprint.png"


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
						<span>Instruworld by Spotify</span>
				</h1>

			</div>

			<div className=" div__details pad-1">
				<div className=" col-3" >
					<p className="p-text">Client:</p>
					<p className="p-text">Spotify, Singapore Polytechnic</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Role:</p>
					<p className="p-text">UI/UX, Graphic Design</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Date:</p>
					<p className="p-text">2021</p>
				</div>
			</div>

			<div className=" div__text pad-1">
				<p className="p-text">More about this project:</p>
				<p>This school project challenged us to create an application for Spotify targeted for children. We were allowed to create anything we wanted as long it was logical and kept the tenets of Spotify. The challenge of this project was empathising with children. As the application is for children, we wanted to make the user experience easy for children to navigate. We had to research on gestures children use and the do's and don'ts. Additionally, we conducted a lot of test sessions with children to gradually improve the UI and UX.</p>
			</div>

				<div className="">
					<h2 className="pad-1" style = {{ textAlign:"left" }}>Showcase</h2>
			</div>

			<div className=" img__display1">
				<div className="pad-1">
					<img className="img__display1 img__hover" alt="nuzzle1" src={Image5}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Service Blueprint</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Signup Page</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image2}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Introduction and Exploration</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image3}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Fun and Games</p>
				</div>
			</div>

			<div className=" img__display">
				<div className="pad-1">
					<img className="img__display img__hover" alt="nuzzle1" src={Image4}/>
				</div>
				<div className="div__image_text pad-1">
					<p>Unlock songs and earn badges</p>
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