import React from 'react';
import GitMatchResultCard from './resultcard';

export default function GitMatchResults(props) {
	let results;
	console.log(props);
	if (!props.results & !props.loading) {
		results = <div />;
	} else {
		results = (
			<div className="container">
				<GitMatchResultCard
					key={null}
					user={props.GitMatchUser}
					chartData={props.chartData.GitMatchUser}
					results={props.results}
					chartClick={props.chartClick}
				/>

				<GitMatchResultCard
					index={props.index}
					getMyStars={props.getMyStars}
					maxIndex={props.maxIndex}
					nextMatch={props.nextMatch}
					previousMatch={props.previousMatch}
					user={props.MatchingUsers[props.index]}
					chartData={props.chartData.MatchedUser}
					results={props.results}
					chartClick={props.chartClick}
				/>
			</div>
		);
	}
	return results;
}
