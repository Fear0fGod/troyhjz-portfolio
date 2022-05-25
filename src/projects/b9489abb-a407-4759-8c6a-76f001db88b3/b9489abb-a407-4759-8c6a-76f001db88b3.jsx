import React from 'react'
import './project.scss';
import { Navbar } from '../../components';


const ShowcaseSite = () => {
    return (
			<>
			<Navbar />
			<div className=" pad-1 margin-2">
				<h1 
					className="head-text" 
					style={{textTransform:"none", 
					justifyContent:"flex-start", 
					textAlign:"left"}}>
						<span>This Website</span>
				</h1>

			</div>

			<div className=" div__details pad-1">
				<div className=" col-3" >
					<p className="p-text">Client:</p>
					<p className="p-text">Troy Han</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Role:</p>
					<p className="p-text">Web Dev, UI/UX</p>
				</div>
				<div className=" col-3">
					<p className="p-text">Date:</p>
					<p className="p-text">2022</p>
				</div>
			</div>

			<div className=" div__text pad-1">
				<p className="p-text">More about this project:</p>
				<p>With the help of "Javascript Mastery" and Stackoverflow, I managed to create this website to showcase my works.</p>
			</div>

				<div className="">
					<h2 className="pad-1" style = {{ textAlign:"left" }}>Showcase</h2>
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

export default ShowcaseSite