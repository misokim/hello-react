import React, { useState } from 'react';

const Say = () => {
	const [msg, setMsg] = useState('');
	const onClickEnter = () => setMsg('안녕하세요!');
	const onClickLeave = () => setMsg('안녕히 가세요!');
	
	const [color, setColor] = useState('blue');

	return (
		<div>
				<button onClick={onClickEnter}>입장</button>
				<button onClick={onClickLeave}>퇴장</button>
				<h1 style={{ color }}>{msg}</h1>
				<button style={{ color: 'black' }} onClick={() => setColor('black')}>검정색</button>
				<button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
				<button style={{ color: 'purple' }} onClick={() => setColor('purple')}>보라색</button>
		</div>
	);
};

export default Say;