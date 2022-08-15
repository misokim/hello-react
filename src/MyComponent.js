import PropType from "prop-types";
import { Component } from "react";

// const MyComponent = ({ name, children }) => {
// 	return (
// 		<div>
// 			<div>제 이름은 {name}입니다.</div>
// 			<div>children 값은 {children} 입니다.</div>
// 		</div>
// 	);
// };

class MyComponent extends Component {
	static defaultProps = {
		name: '홍길동'
	}
	static propType = {
		name: PropType.string.isRequired
	}
 render () {
	const { name, children } = this.props;
	return (
		<div>
			<div>제 이름은 {name}입니다.</div>
			<div>children 값은 {children} 입니다.</div>
		</div>
	);
 }
}

MyComponent.defaultProps = {
	name: '홍길동'
}

MyComponent.PropType = {
	name: PropType.string
}

export default MyComponent;

