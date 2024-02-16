import { createLazyFileRoute } from '@tanstack/react-router';

const Register = () => <div className="p-2">Hello from Register!</div>;

export const Route = createLazyFileRoute('/__public/register')({
	component: Register,
});
