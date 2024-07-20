import { createStore } from "zustand/vanilla";

export type AuthState = {
	sessionToken: string | null;
}

export type AuthActions = {
	setSessionToken: (sessionToken: string) => void;
}

export type AuthStore = AuthState & AuthActions;

export const defaultInitialState: AuthState = {
	sessionToken: null,
}

export const createAuthStore = (
	initialState: AuthState = defaultInitialState
) => {
	return createStore<AuthStore>((set) => ({
		...initialState,
		setSessionToken: (sessionToken: string) => set({ sessionToken }),
	}));
}
