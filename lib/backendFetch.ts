import ApiUrl from "../constants/ApiUrl";

export default async function backendFetch(
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE",
  endpoint: string,
  data?: any,
  additionalHeaders?: any
) {
  const headers = {
    "Content-Type": "application/json",
    ...additionalHeaders,
  };

  const res = await fetch(`${ApiUrl}${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData);
  }

  return resData;
}
