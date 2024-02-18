import { createContext, useContext, useMemo } from 'react';
import { t } from 'i18next';
import { toast } from 'react-toastify';

// MODELS
import { AuthContextInterface, LoginRequestInterface, RegisterInterface } from 'src/features/auth/models';

// API
import { login, register } from 'src/features/auth/api';
import { useAppStore } from 'src/store';

// STORE

const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { clearAccessToken, addAccessToken, accessToken } = useAppStore();

	const loginUser = async (val: LoginRequestInterface, onSuccess?: () => void) => {
		const resp = await login(val);
		if (resp) {
			addAccessToken(resp.token);
			if (onSuccess) onSuccess();
		}
	};

	const logout = () => {
		clearAccessToken();
	};

	const registerUser = async (data: RegisterInterface) => {
		const resp = await register(data);
		if (resp.success) toast.success(t('general.userCreated'));
	};

	const contextValue = useMemo(
		() => ({
			isAuthenticated: !!accessToken,
			token: accessToken,
			loginUser,
			logout,
			registerUser,
		}),
		[accessToken],
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) throw new Error('useAuth must be used within an AuthProvider');

	return context;
};
