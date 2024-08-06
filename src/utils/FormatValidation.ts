export const dateFormatValidate = (value: string) => {
  const pattern =
    /^(13[0-9]{2}|14[0-9]{2})\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
  return pattern.test(value) || "فرمت تاریخ باید به صورت YYYY/MM/DD باشد";
};

export const phoneNumberFormatValidate = (value: string) => {
  const pattern = /^0\d{10}$/;
  return pattern.test(value) || "فرمت باید به شکل 09XX باشد";
};

export const meliCodeFormatValidate = (value: string) => {
  const pattern = /^\d{10}$/;
  return pattern.test(value) || "کد ملی باید 10 رقمی باشد";
};
