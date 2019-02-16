import React from 'react';
import Buttons from './Buttons';

const ButtonList = ({ buttons, clicker }) => {
	return (
	<div>
		{
			buttons.map((user, i) => { //Goes through each item in the drums.js array and maps them to a unique Button.
				return (
					<Buttons key={buttons[i].id} id={buttons[i].id} keyCode={buttons[i].keyCode} keyTrigger={buttons[i].keyTrigger} url={buttons[i].url} desc={buttons[i].desc} clicker={clicker} />
				);
			})
		}
	</div>		
	);
}

export default ButtonList;