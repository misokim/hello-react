import { Component } from 'react';

class Counter extends Component {

	// state 초깃값 설정
	state = {
		number: 0,
		fixedNumber: 0
	}

	render() {
		const { number, fixedNumber } = this.state; // state 조회시 this.state로 조회
		return (
			<div>
				<h1>{number}</h1>
				<h2>fixedNumber : {fixedNumber}</h2>
				<button onClick={() => {
					// this.setState를 사용하여 state에 새로운 값을 넣음
					this.setState(
						{
							number: number + 1
						},
						() => {
							console.log('setState 호출');
							console.log(this.state);
						}
					);

				}}>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;