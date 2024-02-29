import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { authStore, AuthStoreInterface } from 'src/store/authStore';
import { globalStore, GlobalStoreInterface } from 'src/store/globalStore';

type AppStoreType = AuthStoreInterface & GlobalStoreInterface;

export const useAppStore = create<AppStoreType>()((...a) => ({
	...persist(authStore, {
		name: 'authStore',
		partialize: (state) => ({ accessToken: state.accessToken }),
		storage: createJSONStorage(() => localStorage),
	})(...a),
	...globalStore(...a),
}));
