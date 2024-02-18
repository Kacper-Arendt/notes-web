import { StateCreator } from 'zustand';

export interface AuthStoreInterface {
	accessToken: string | null;
	addAccessToken: (token: string) => void;
	clearAccessToken: () => void;
}

export const authStore: StateCreator<AuthStoreInterface> = (set) => ({
	accessToken: null,
	addAccessToken: (accessToken) => set(() => ({ accessToken })),
	clearAccessToken: () => set(() => ({ accessToken: null })),
});
