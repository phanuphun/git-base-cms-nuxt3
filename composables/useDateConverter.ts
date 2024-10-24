export const useDateConverter = (dateString: string , lang?: 'th-TH' | 'en-EN'): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if(!lang) lang = 'en-EN';

  return date.toLocaleString(lang, options);
};
