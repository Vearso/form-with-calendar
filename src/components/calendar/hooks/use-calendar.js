import * as datefns from 'date-fns';
import { range }    from '@/helpers/helpers';

export const PREVIOUS = 'PREVIOUS';
export const NEXT = 'NEXT';
export const CURRENT = 'CURRENT';

export const useCalendar = () => {
  const date = new Date(2021,8);
  const today = date.getDay();
  const currentMonth = date.getMonth();
  const prevMonth = currentMonth - 1 < 0 ? 11: currentMonth - 1;
  // const nextMonth = currentMonth + 1 > 11 ? 0 : currentMonth + 1;
  const currentYear = date.getFullYear();
  const numberOfDaysInCurrentMonth = datefns.getDaysInMonth(date);
  const firstDayOfMonth = datefns.getDay(new Date(currentYear, currentMonth, 1));
  const lastDayOfMonth = datefns.getDay(datefns.lastDayOfMonth(date));
  const daysInPrevMonth = datefns.getDaysInMonth(new Date(prevMonth === 11 ? currentYear - 1 : currentYear,prevMonth, 1));
  const getPrevMonthLastDays = range(firstDayOfMonth).map(index => {return {value: daysInPrevMonth - index, month: PREVIOUS}}).reverse();

  // const daysInNextMonth = datefns.getDaysInMonth(new Date(nextMonth === 0 ? currentYear + 1 : currentYear, nextMonth, 1));
  const getNextMonthFirstDays = range(7 - lastDayOfMonth === 7 ? 0 : 7 - lastDayOfMonth - 1).map(index => { return {value: index + 1, month: NEXT}});

  const allVisibleDays = [...getPrevMonthLastDays, ...range(numberOfDaysInCurrentMonth).map(index =>{ return {value: index + 1, month: CURRENT}}) ,...getNextMonthFirstDays ]
return {
  today,
  firstDayOfMonth,
  allVisibleDays,
};
}
