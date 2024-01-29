export const formatPrice = (
    price: number,
    lang?: string,
    isCurrency?: boolean,
    currency?: string
  ) => {
    const options: { [key: string]: any } = {};
    if (isCurrency) {
      options.style = "currency";
    }
    if (!currency) {
      options.currency = "IDR";
    }
    return new Intl.NumberFormat(lang ?? "en-EN", options).format(price);
};