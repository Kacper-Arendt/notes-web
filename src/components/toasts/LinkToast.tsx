// REDUX

// HOOKS

// MODELS

// COMPONENTS

// STYLES

// UTILS

import { Link } from '@tanstack/react-router';

export const LinkToast = ({ to, linkText, leftText }: { to: string; linkText: string; leftText?: string }) => (
	<p>
		{leftText && <span>{leftText}</span>} <Link to={to}>{linkText}</Link>
	</p>
);
