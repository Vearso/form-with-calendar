import * as datefns from 'date-fns';
import { range }    from '@/helpers/helpers';
import { ref }      from 'vue';

export const PREVIOUS = 'PREVIOUS';
export const NEXT = 'NEXT';
export const CURRENT = 'CURRENT';
export const shortWeekNames = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];
export const monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
export const useCalendar = () => {
  const date = ref(new Date())
  const monthDays = ref([]);
  const currentMonthAndYear = ref('');

  const calculateDays = () => {
    const currentMonth = date.value.getMonth();
    const currentYear = date.value.getFullYear();
    const numberOfDaysInCurrentMonth = datefns.getDaysInMonth(date.value);

    currentMonthAndYear.value = `${monthNames[currentMonth]} ${currentYear}`

    const prevMonth = currentMonth - 1 < 0 ? 11 : currentMonth - 1;
    const daysInPrevMonth = datefns.getDaysInMonth(new Date(prevMonth === 11 ? currentYear - 1 : currentYear, prevMonth, 1));

    const firstDayOfMonth = datefns.getDay(new Date(currentYear, currentMonth, 1));
    const lastDayOfMonth = datefns.getDay(datefns.lastDayOfMonth(date.value));

    const getPrevMonthLastDays = range(firstDayOfMonth).map(index => {
      return {
        value: daysInPrevMonth - index,
        month: PREVIOUS,
      };
    }).reverse();

    // const daysInNextMonth = datefns.getDaysInMonth(new Date(nextMonth === 0 ? currentYear + 1 : currentYear, nextMonth, 1));
    const getNextMonthFirstDays = range(7 - lastDayOfMonth === 1 ? 0 : 7 - lastDayOfMonth - 1).map(index => {
      return {
        value: index + 1,
        month: NEXT,
      };
    });

    const allVisibleDays = [ ...getPrevMonthLastDays, ...range(numberOfDaysInCurrentMonth).map(index => {
      return {
        value: index + 1,
        month: CURRENT,
      };
    }), ...getNextMonthFirstDays ];
    return allVisibleDays;
  }

  monthDays.value = calculateDays();

  const setNextMonth = () => {
    date.value.getMonth() + 1 > 11 ?
    date.value = new Date(date.value.getFullYear() + 1, 0) :
    date.value = new Date(date.value.getFullYear(), date.value.getMonth() + 1);
    monthDays.value = calculateDays();
  };

  const setPrevMonth = () => {
    date.value.getMonth() - 1 < 0 ?
    date.value = new Date(date.value.getFullYear() - 1, 11) :
    date.value = new Date(date.value.getFullYear(), date.value.getMonth() - 1);
    monthDays.value = calculateDays();
  };

  return {
    month: monthDays,
    currentMonthAndYear,
    setNextMonth,
    setPrevMonth,
  };
};
