const url = process.env.REACT_APP_BASE_URL;

const login = {
  login: process.env.REACT_APP_LOGIN_MOCK,
  password: process.env.REACT_APP_PASSWORD_MOCK,
};

const HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let token: string | null = null;

const getToken = async (): Promise<void> => {
  if (token) {
    return;
  }
  const response = await fetch(`${url}/login`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(login),
  });

  token = await response.json();
};

export const request = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  path: string,
  body?: T
): Promise<T> => {
  await getToken();

  const headers = {
    ...HEADERS,
    Authorization: `Bearer ${token}`,
  };

  let requestInfo: RequestInit = {
    method,
    headers,
  };

  if (body) {
    requestInfo = {
      ...requestInfo,
      body: JSON.stringify(body),
    };
  }

  const response = await fetch(`${url}/${path}`, requestInfo);

  if (!response.ok) {
    throw new Error(
      `Failed to request: ${response.status} - ${response.statusText}`
    );
  }

  return response.json();
};
