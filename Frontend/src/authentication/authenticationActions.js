import authenticationAPI from "./authenticationAPI";

export function loginError(response) {
  const newState = {
    accessToken: null,
    refreshToken: null,
    error: response.error_description,
    userInfo: {}
  };
}

export function loginSuccess(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function saveTokens(params) {
  const { access_token, refresh_token } = params;

  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
}

export async function login(credentials) {
  try {
    const response = await authenticationAPI.login(credentials);
    if (response.error) {
      loginError(response);
    } else {
      const user = {
        username: response.username,
        userId: response.userId
      };
      saveTokens(response);
      loginSuccess(user);
    }
    return response;
  } catch (response) {
    loginError(response);
    throw response;
  }
}
