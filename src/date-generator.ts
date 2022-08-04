import {
  eachDayOfInterval,
  format,
  isEqual,
  parseISO,
  subDays,
} from 'date-fns';
import calendar from './calendar.json';
interface DayData {
  date: Date;
  noClasses: boolean;
  description: string;
}
interface JsonEventData {
  date?: string;
  start?: string;
  end?: string;
  noClasses: boolean;
  description: string;
}
// This function converts date strings to actual Date objects, and explodes
// events with start and end dates into dates for the entire range.
function getEventData(data: JsonEventData[]): DayData[] {
  const events = data.reduce((previous: DayData[], current): DayData[] => {
    if (current.date) {
      previous.push({
        date: parseISO(current.date),
        noClasses: current.noClasses,
        description: current.description,
      });
    } else if (current.start && current.end) {
      const allDays: Date[] = eachDayOfInterval({
        // need to start day before because... reasons?
        start: subDays(parseISO(current.start), 1),
        end: parseISO(current.end),
      });
      allDays.forEach((day) => previous.push({
        date: day,
        noClasses: current.noClasses,
        description: current.description,
      }));
    }
    return previous;
  }, []);
  return events;
}
function hasEvents(d: Date, events: DayData[]): DayData | undefined {
  return events.find((event) => isEqual(event.date, d));
}
export default function getMeetDates(
  termNum: number,
  weekdays: number[],
  outputFormat: string,
): string[] {
  const termData = calendar.terms[termNum];
  const termDates = eachDayOfInterval({
    // need to start day before because... reasons?
    start: subDays(parseISO(termData.start), 1),
    end: parseISO(termData.end),
  });
  // termDates.forEach((date) => console.log(date.toString()));
  const eventData: DayData[] = getEventData(termData.events);
  const meetings: string[] = [];
  termDates.reduce((prev: string[], current): string[] => {
    if (weekdays.includes(current.getDay())) {
      let header = format(current, outputFormat);
      const event = hasEvents(current, eventData);
      if (event) {
        const noClass = event.noClasses ? 'NO CLASS' : '';
        header = `${header} ${noClass} (${event.description})`;
      }
      prev.push(header);
    }
    return prev;
  }, meetings);
  return meetings;
}