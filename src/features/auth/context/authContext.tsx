import { createContext, useContext, useMemo, useState } from 'react';

export interface AuthContextInterface {
	isAuthenticated: boolean;
	setUser: (username: string | null) => void;
	user: string | null;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<string | null>(null);

	const contextValue = useMemo(
		() => ({
			isAuthenticated: !!user,
			user,
			setUser,
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
