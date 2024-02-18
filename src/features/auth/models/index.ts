export interface AuthContextInterface {
	isAuthenticated: boolean;
	loginUser: (data: LoginRequestInterface) => void;
	logout: () => void;
	token: string | null;
	registerUser: (data: RegisterInterface) => void;
}

export interface RegisterInterface {
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface LoginRequestInterface {
	email: string;
	password: string;
}

export interface LoginResponseInterface {
	token: string;
}
