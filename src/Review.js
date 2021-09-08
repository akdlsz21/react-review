import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { FaRandom } from 'react-icons/fa';
const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const checkNumber = (number) => {
		if (number > people.length - 1) return 0;
		else if (number < 0) return people.length - 1;
		else return number;
	};

	const prevPerson = () => {
		setIndex((index) => {
			// anon func will become 3 depending on condition.
			let newIndex = index - 1;
			return newIndex;
		});
	};

	function nextPerson() {
		setIndex((index) => {
			//anonymous function will become 0 depending on condition
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	}

	const randomPerson = () => {
		// When random index of array, floor(random * length) will be appropriate.
		let randomNumber = Math.floor(Math.random() * people.length);
		if (randomNumber === index) {
			randomNumber++;
		}
		setIndex(checkNumber(randomNumber));
	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<div className="author">{name}</div>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container" style={{ position: 'relative' }}>
				<button className="prev-btn" onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextPerson}>
					<FaChevronRight />
				</button>
				<button
					className="random-btn"
					onClick={randomPerson}
					style={{ position: 'absolute', bottom: '2px' }}
				>
					<FaRandom />
				</button>
			</div>
		</article>
	);
};

export default Review;
