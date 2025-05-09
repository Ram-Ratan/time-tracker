declare module 'indian-holidays' {
  /**
   * Function that returns Indian holidays for a given year
   * @param year The year to get holidays for
   * @returns Array of holiday objects with name and date
   */
  function indianHolidays(year: number): Array<{ name: string; date: string }>;
  export = indianHolidays;
}
