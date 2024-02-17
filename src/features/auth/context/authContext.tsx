import { createContext, useContext, useMemo, useState } from 'react';
import { t } from 'i18next';
import { toast } from 'react-toastify';

// MODELS
import { AuthContextInterface, RegisterInterface } from 'src/features/auth/models';

// API
import { register } from 'src/features/auth/api';

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

	const registerUser = async (data: RegisterInterface) => {
		const resp = await register(data);
		if (resp.success) toast.success(t('general.userCreated'));
	};

	const contextValue = useMemo(
		() => ({
			isAuthenticated: !!user,
			user,
			login,
			logout,
			registerUser,
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
