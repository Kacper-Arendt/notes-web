import { createFileRoute } from '@tanstack/react-router';

const index = () => (
	<div className="p-2">
		<h3>Welcome Home!</h3>
	</div>
);

export const Route = createFileRoute('/__auth/')({
	component: index,
});
