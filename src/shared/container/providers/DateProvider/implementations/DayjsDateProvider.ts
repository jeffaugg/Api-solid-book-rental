import { IDateProvider } from "../IDateProvider";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
class DayjsDateProvider implements IDateProvider {
    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }
    compareInHours(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUTC(end_date);
        const start_date_utc = this.convertToUTC(start_date);
        return dayjs(end_date_utc).diff(start_date_utc, "hours");
    }
    dateNow(): Date {
        return dayjs().toDate();
    }
}

export { DayjsDateProvider };
