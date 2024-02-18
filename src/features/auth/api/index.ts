// API
import { api } from 'src/libs/api';

// MODELS
import { LoginRequestInterface, LoginResponseInterface, RegisterInterface } from 'src/features/auth/models';

export const register = async (data: RegisterInterface): Promise<{ success: boolean }> => {
	try {
		await api.post(`api/Auth/Register`, data);
		return { success: true };
	} catch (e) {
		return { success: false };
	}
};

export const login = async (data: LoginRequestInterface): Promise<LoginResponseInterface | null> => {
	try {
		return await api.post(`api/Auth/Login`, data);
	} catch (e) {
		return null;
	}
};
