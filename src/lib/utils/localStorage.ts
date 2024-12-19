const AUTH_TOKEN = "@authToken";
const REFRESH_TOKEN = "@refreshToken";

type AuthTokens = {
  token: string;
  refreshToken: string;
};
export function setAuthTokens(tokens: AuthTokens) {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_TOKEN, tokens.token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);
  }
}

export function getAuthTokens(): AuthTokens | undefined {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(AUTH_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (token && refreshToken) {
      return {
        token,
        refreshToken,
      };
    }
  }
}

export function clearAuthTokens() {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
}
