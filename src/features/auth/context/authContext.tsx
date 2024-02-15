import { createContext, useContext, useMemo, useState } from 'react';

export interface AuthContextInterface {
	isAuthenticated: boolean;
	login: (username: string) => void;
	logout: () => void;
	user: string | null;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

const userKey = 'userToken';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<string | null>(localStorage.getItem(userKey));

	const login = (val: string) => {
		localStorage.setItem(userKey, val);
		setUser(val);
	};

	const logout = () => {
		localStorage.removeItem(userKey);
		setUser(null);
	};

	const contextValue = useMemo(
		() => ({
			isAuthenticated: !!user,
			user,
			login,
			logout,
		}),
		[user],
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context) throw new Error('useAuth must be used within an AuthProvider');

	return context;
}
