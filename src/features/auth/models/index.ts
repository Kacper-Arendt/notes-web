export interface AuthContextInterface {
	isAuthenticated: boolean;
	login: (username: string) => void;
	logout: () => void;
	user: string | null;
	registerUser: (data: RegisterInterface) => void;
}

export interface RegisterInterface {
	email: string;
	password: string;
	passwordConfirm: string;
}
