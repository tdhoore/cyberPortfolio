const url = "/work.json";

export const fetchWorkAPI = async () => {
  return await fetch(url).then((r) => {
    return r.json();
  });
};
