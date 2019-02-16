import React from 'react';

const Button = ({ id, keyCode, keyTrigger, url, desc, clicker }) => {
	return (
		<div>
			<button className="drum-pad" id={`${id}`} onClick={() => clicker(`${id}`)}>{keyTrigger}
	            <audio className="clip" id={`${keyTrigger}`} src={`${url}`}></audio>
	        </button>
		</div>
	);
}

export default Button;