import { createFileRoute } from '@tanstack/react-router';
import { Tasks } from 'src/features/tasks/routes/Tasks';

export const Route = createFileRoute('/__auth/tasks')({
	component: Tasks,
});
