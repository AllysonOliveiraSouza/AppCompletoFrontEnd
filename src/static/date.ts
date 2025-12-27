function getHours() {
  const date = new Date();
  const hours = date.getHours();

  return hours;
}

export const date = { getHours };
