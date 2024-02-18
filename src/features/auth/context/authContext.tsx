import { createContext, useContext, useMemo, useState } from 'react';
import { t } from 'i18next';
import { toast } from 'react-toastify';

// MODELS
import { AuthContextInterface, LoginRequestInterface, RegisterInterface } from 'src/features/auth/models';

// API
import { login, register } from 'src/features/auth/api';

const AuthContext = createContext<AuthContextInterface | null>(null);

const userKey = 'userToken';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<string | null>(localStorage.getItem(userKey));

	const loginUser = async (val: LoginRequestInterface) => {
		const resp = await login(val);
		if (resp) {
			localStorage.setItem(userKey, resp.token);
			setToken(resp.token);
		}
	};

	const logout = () => {
		localStorage.removeItem(userKey);
		setToken(null);
	};

	const registerUser = async (data: RegisterInterface) => {
		const resp = await register(data);
		if (resp.success) toast.success(t('general.userCreated'));
	};

	const contextValue = useMemo(
		() => ({
			isAuthenticated: !!token,
			token,
			loginUser,
			logout,
			registerUser,
		}),
		[token],
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) throw new Error('useAuth must be used within an AuthProvider');

	return context;
};
