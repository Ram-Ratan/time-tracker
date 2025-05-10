

export const convertDayNumberToString = (dayNumber: number): string => {
    const daysOfWeek = [
        'SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY'
    ];
    return daysOfWeek[dayNumber];
}