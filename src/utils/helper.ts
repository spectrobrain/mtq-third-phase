// generador de keys para renderizado
export const generatorKey = Math.floor(Math.random() * 100000);

// array de meses para manejo de fechas
export const monthsData = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// funcion para sacar porcentaje de ventas
export const getAverange = (sales: number, quota: number) => {
  const averange = parseFloat(((sales / quota) * 100)?.toFixed(1));
  return averange;
};

export const getCutMonth = (inputDate) => {
  // Split the input date string to extract the month, day, and year
  const [month, day, year] = inputDate.split('/').map(Number);

  // Create date objects for the given date and the current date
  // Note: JavaScript months are 0-indexed
  const givenDate = new Date(year, month - 1, day, 0, 0, 0, 0);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the current date to midnight

  // Check if both dates are from the same year and same month
  if (givenDate.getFullYear() !== currentDate.getFullYear() ||
      givenDate.getMonth() !== currentDate.getMonth()) {
    throw new Error("The given date and current date are not from the same month and year.");
  }
  // Return the difference between the given date and the current date
  return givenDate.getDate() - currentDate.getDate();
};


export const orderByItem = (items: any) => {
  items.sort((a?: any, b?: any) => {
    const result = a?.id_ - b?.id_;
    return result;
  });
  return items;
};

export const formatterUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});