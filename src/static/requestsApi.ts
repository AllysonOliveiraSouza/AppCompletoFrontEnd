const Post: any = async (url: string, body: {}, tokenJwt?: string) => {
  try {
    let response;

    if (!tokenJwt) {
      response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      });
    } else {
      response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenJwt}`,
        },
        method: "POST",
        body: JSON.stringify(body),
      });
    }

    return response;
  } catch (error) {
    return {};
  }
};

async function Get(url: string, tokenJwt?: string | null): Promise<any> {
  if (tokenJwt) {
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenJwt}`,
      },
    });
    return response;
  }
}

async function Patch(url: string, tokenJwt?: string | null): Promise<any> {
  if (tokenJwt) {
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenJwt}`,
      },
      method: "PATCH",
    });
    return response;
  }
}

export const requestsApi = { Post, Get, Patch };
