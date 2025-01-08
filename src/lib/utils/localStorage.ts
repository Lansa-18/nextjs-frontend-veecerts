const AUTH_TOKEN = "@authToken";
const REFRESH_TOKEN = "@refreshToken";
const TOKEN_DATE_ADDED = "@tokenDateAdded";

type AuthTokens = {
  token: string;
  refreshToken: string;
  dateAdded: string;
};
export function setAuthTokens(tokens: AuthTokens) {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_TOKEN, tokens.token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);
    localStorage.setItem(TOKEN_DATE_ADDED, tokens.dateAdded);
  }
}

export function getAuthTokens(): AuthTokens | undefined {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(AUTH_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    const dateAdded = localStorage.getItem(TOKEN_DATE_ADDED);
    if (token && refreshToken && dateAdded) {
      return {
        token,
        refreshToken,
        dateAdded,
      };
    }
  }
}

export function clearAuthTokens() {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
}
