import axios from 'axios';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import { logger } from 'src/shared/logger';
import { useAppStore } from 'src/store';

const baseURL = import.meta.env.VITE_API_URL;
const { language } = i18next;

export const api = axios.create({
	baseURL,
});

api.interceptors.request.use((config) => {
	const withCredentials = config?.withCredentials ?? true;
	if (withCredentials) {
		const { accessToken } = useAppStore.getState();
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
	}
	config.headers['Accept-Language'] = language;
	return config;
});

api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		const message = error?.response?.data || error?.message;
		if (message) toast.error(message);
		logger.error(error?.name ?? 'axios error', error);
		return Promise.reject(error);
	},
);
