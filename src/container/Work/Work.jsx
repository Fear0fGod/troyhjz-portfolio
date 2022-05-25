import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Element } from 'react-scroll'


import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client"
import { Link } from "react-router-dom";

import './Work.scss';

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({y:0, opacity:1});
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);


	useEffect(() => {
		const query = '*[_type == "works"]';
		const worksTwoQuery = '*[_type == "works2"]';

		client.fetch(query).then((data) => {
			console.log(data);
			setWorks(data);
			setFilterWork(data);
		});

		client.fetch(worksTwoQuery).then((data) => {
			console.log(data)
		});
		}, []);

	

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{y:100, opacity:0}]);

		setTimeout(() => {
			setAnimateCard([{y:0, opacity:1}]);

			if(item === 'All') {
				setFilterWork(works);
			}
			else{
				setFilterWork(works.filter((work)=> work.tags.includes(item)))
			}
		}, 500);

	}
	return (
		<>
			 <Element id='works-destination' name='i-am-works'>
			<h2 className="head-text">
				My Creative
				<span> Portfolio</span>
				<br />
			</h2>
			<div className="app__work-filter app__flex">
				{['UI', 'UX', 'Web Dev', 'Graphic Design', 'Photography', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWork.map((work, index)=> (
					<div className="app__work-item app__flex" key={index}>
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name}/>

							<motion.div
								whileHover= {{opacity:[0, 1]}}
								transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
								className="app__work-hover app__flex"
							>
								<a
								href={`/${work._id}`}>
								<button
								className="button__eye"
								data-target={`#details${work._id}`}
									>
										View
									</button>
								</a>
							</motion.div>
							<div>
							</div>

						</div>

						<div className ="app__work-content app__flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className='p-text' style={{ marginTop: 10}}>{work.description}</p>

							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>

					</div>
				))}
			</motion.div>
			</Element>
			
		</>
	)
}

export default AppWrap(
	MotionWrap(Work, 'app__works'),
	 'works', 
	 'app__primarybg'
);
