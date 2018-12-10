import { addMonths, addYears } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';

export class datepicker
{
    onFormatDate = (date: Date): string => {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
      };

    today: Date = new Date(Date.now());
    minDate: Date = addMonths(this.today, -1);
    maxDate: Date = addYears(this.today, 1);
}