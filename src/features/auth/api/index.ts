// API
import { api } from 'src/libs/api';

// MODELS
import { RegisterInterface } from 'src/features/auth/models';

export const register = async (data: RegisterInterface): Promise<{ success: boolean }> => {
	try {
		await api.post(`api/Auth/Register`, data);
		return { success: true };
	} catch (e) {
		return { success: false };
	}
};
