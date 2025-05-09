export const convertToCsv = (jsonData: any) => {
    const csvHeaders = Object.keys(jsonData[0]).join(',');
    const csvRows = jsonData.map((row: any) => {
        const rowValues = Object.values(row).map((value: any) => {
            if (typeof value === 'string') {
                const escapedAndQuotedValue = value.replace(/"/g, '""');
                if (escapedAndQuotedValue.includes(',') || escapedAndQuotedValue.includes('\n')) {
                    return `"${escapedAndQuotedValue}"`;
                }
                return escapedAndQuotedValue;
            }
            return value;
        });

        return rowValues.join(',');
    });
    return `${csvHeaders}\n${csvRows.join('\n')}`;
};
