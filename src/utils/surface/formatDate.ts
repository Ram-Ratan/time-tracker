export function formatDate(inputDate: Date) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
}