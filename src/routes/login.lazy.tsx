import { createLazyFileRoute } from '@tanstack/react-router';

const Login = () => <div className="p-2">Hello from Login!</div>;

export const Route = createLazyFileRoute('/login')({
	component: Login,
});
