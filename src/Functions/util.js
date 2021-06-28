export const getCurrencySymbol = (currency) =>
  (0)
    .toLocaleString("RU-ru", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim();
