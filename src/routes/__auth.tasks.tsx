import { createFileRoute } from '@tanstack/react-router';

const Tasks = () => (
	<div className="p-2">
		<h3>Welcome Tasks!</h3>
	</div>
);

export const Route = createFileRoute('/__auth/tasks')({
	component: Tasks,
});
