import type { RootState } from "../store";

export const selectIsAuthenticated =

    (state: RootState) =>

        state.auth.isAuthenticated;

export const selectUsername =

    (state: RootState) =>

        state.auth.username;

export const selectToken =

    (state: RootState) =>

        state.auth.token;