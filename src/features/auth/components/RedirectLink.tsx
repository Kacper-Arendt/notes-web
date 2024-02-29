import { Link } from '@tanstack/react-router';

export const RedirectLink = ({ text, to }: { text: string; to: string }) => (
	<Link to={to} className="text-gray-400 text-xs m-auto hover:text-primary">
		{text}
	</Link>
);
