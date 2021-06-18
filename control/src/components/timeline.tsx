import React, { useState, useEffect } from 'react';
import './timeline.scss';

const items = [
	// TODO: Add pictures of actions.
	// TODO: Load all this from a series of files so it's easy to maintain.
	{ when: 0, message: 'House Lights Off on Wall Control' },
	{ when: 1, message: 'Turn On Lighting System in Rack' },
	{ when: 2, message: 'Turn on Projector' },
	{ when: 3, message: 'Turn on Soundboards' },
	{ when: 4, message: 'Open ProPresenter' },
	{ when: 5, message: 'Open Livestream Studio' },
	{ when: 6, message: 'Set title for this week, and time to 9am, then hit update' },
	{ when: 7, message: 'In Livestream Studio: "Black" should be Output' },
	{ when: 8, message: 'Push GFX 2 (Logo)' },
	{ when: 9, message: 'Make sure "Names" tab is ready for whomever is speaking today' },
	{ when: 19.9, message: 'Output "Intro" source.' },
	{ when: 20, message: 'Hit "GO LIVE" button in top left' },
	{ when: 20.1, message: 'Preview "Cameras" source.' },
	{ when: 21, message: 'Check that the stream started OK on Vimeo, YT and FB.' },
	{ when: 25, message: 'When countdown begins, output "Cameras"' },
	{ when: 30, message: 'Have fun! Mistakes happen, just roll with it.' },
	{ when: 80, message: 'Double tap on "Outro" source to output' },
	{ when: 81, message: 'Single tap on "Black" source to preview' },
	{ when: 90, message: 'When the timer hits 0, stop streaming by tapping red "STREAMING" button' },
	{ when: 91, message: 'Make sure "Projector" is going out to the lobby' },
];
const serviceTimes = [
	{ hour: 8, minutes: 30 },
	{ hour: 12, minutes: 30 },
];

export function Timeline() {
	const [serviceTime, setServiceTime] = useState(calculateServiceTime());
	const [upNext, setUpNext] = useState(calculateUpNextText(serviceTime));
	const [countdown, setCountdown] = useState(calculateUpNextCountdown(serviceTime));

	useEffect(() => {
		const timer = setInterval(() => {
			setServiceTime(calculateServiceTime());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setUpNext(calculateUpNextText(serviceTime));
			setCountdown(calculateUpNextCountdown(serviceTime));
		}, 1000 / 60);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="timeline">
			<div className="up-next">
				{ upNext }
			</div>
			<div className="countdown">
				{ countdown }
			</div>
		</div>
	);
}

function calculateServiceTime() {
	return serviceTimes.filter(time => time.hour <= new Date().getHours()).pop() || serviceTimes[0];
}

function findNextItem(serviceTime: typeof serviceTimes[0]) {
	const now = new Date();
	const minutesElapsed = (now.getHours() - serviceTime.hour) * 60 + (now.getMinutes() - serviceTime.minutes);
	// TODO: Need to be able to check off the boxes for these items.
	const nextItem = items.find(item => item.when >= minutesElapsed);
	return nextItem;
}

function calculateUpNextText(serviceTime: typeof serviceTimes[0]) {
	const nextItem = findNextItem(serviceTime);
	return nextItem?.message || 'All done!';
}

function calculateUpNextCountdown(serviceTime: typeof serviceTimes[0]) {
	const nextItem = findNextItem(serviceTime);
	const now = new Date();
	const minutesElapsed = (now.getHours() - serviceTime.hour) * 60 + (now.getMinutes() - serviceTime.minutes);
	if (!nextItem) {
		return 0;
	}
	return nextItem.when - minutesElapsed;
}