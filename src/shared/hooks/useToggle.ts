import { useState } from 'react';

export const useToggle = (initVal = false) => {
	const [on, setOn] = useState(initVal);

	const toggle = () => setOn(!on);

	return { on, toggle };
};
