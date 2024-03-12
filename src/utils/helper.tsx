export function currencyFormatter(amount: number): string {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2
    });

    return formatter.format(amount);
}


export const getYearList = (): number[] => {
    const currentYear = new Date().getFullYear();
    const yearList: number[] = [];
  
    // Generate years for last 3 years, current year, and next 3 years
    for (let i = currentYear - 3; i <= currentYear + 3; i++) {
      yearList.push(i);
    }
  
    return yearList;
  };