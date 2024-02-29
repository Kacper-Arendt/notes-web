import { StateCreator } from 'zustand';

export interface GlobalStoreInterface {
	sidebarNavOpen: boolean;
	toggleSidebarNavOpen: (token: boolean) => void;
}

export const globalStore: StateCreator<GlobalStoreInterface> = (set) => ({
	sidebarNavOpen: false,
	toggleSidebarNavOpen: (sidebarNavOpen) => set(() => ({ sidebarNavOpen })),
});
