/* eslint-disable @typescript-eslint/no-explicit-any */
export function isLessThanDayOld(datetimeString: string) {
    try {
        const inputDate = new Date(datetimeString); // Parse the datetime string
        const currentDate = new Date(); // Get the current date and time

        const timeDifference = currentDate.getTime() - inputDate.getTime(); // Difference in milliseconds
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds

        return timeDifference < oneDayInMilliseconds;
    } catch (error) {
        console.error((error as any).message);
        return false;
    }
}
