import { ref }      from 'vue';
import * as datefns from 'date-fns';
import { range }    from '@/helpers/helpers';

export const PREVIOUS = 'PREVIOUS';
export const NEXT = 'NEXT';
export const CURRENT = 'CURRENT';
export const shortWeekNames = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];

const monthNames = [ 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER' ];

export const useCalendar = () => {
  const date = ref(new Date());
  const monthDays = ref([]);
  const currentMonthAndYear = ref('');

  const calculateDays = () => {
    const currentMonth = date.value.getMonth();
    const currentYear = date.value.getFullYear();
    const numberOfDaysInCurrentMonth = datefns.getDaysInMonth(date.value);

    currentMonthAndYear.value = `${monthNames[ currentMonth ]} ${currentYear}`;

    // Months are from 0 - 11 there we check if previous is December;
    const prevMonth = currentMonth - 1 < 0 ? 11 : currentMonth - 1;
    const daysInPrevMonth = datefns.getDaysInMonth(new Date(prevMonth === 11 ? currentYear - 1 : currentYear, prevMonth, 1));

    //numbers representing day of week 0 - Sunday etc.
    const firstDayOfMonth = datefns.getDay(new Date(currentYear, currentMonth, 1));
    const lastDayOfMonth = datefns.getDay(datefns.lastDayOfMonth(date.value));

    //First day of month is a number from 0 - 6 - we need to get 0 to 6 days from previous month
    const getPrevMonthLastDays = range(firstDayOfMonth).map(index => {
      return {
        date: new Date(prevMonth === 1 ? currentYear - 1 : currentYear, prevMonth, daysInPrevMonth - index),
        label: daysInPrevMonth - index,
        month: PREVIOUS,
      };
    }).reverse();

    const getCurrentMonthDays = range(numberOfDaysInCurrentMonth).map(index => {
      return {
        date: new Date(currentYear, currentMonth, index + 1),
        label: index + 1,
        month: CURRENT,
      };
    });

    //6 is Saturday then we don't need any days from next month, in other case we need 6 - lastDayOfMonth days from 1 to 6;
    const getNextMonthFirstDays = range(lastDayOfMonth === 6 ? 0 : 6 - lastDayOfMonth).map(index => {
      return {
        date:  currentMonth + 1 > 11 ? new Date(currentYear + 1, 0 ,index + 1) : new Date(currentYear, currentMonth + 1, index + 1),
        label: index + 1,
        month: NEXT,
      };
    });

    return [ ...getPrevMonthLastDays, ...getCurrentMonthDays, ...getNextMonthFirstDays ];
  };

  monthDays.value = calculateDays();

  const setNextMonth = () => {
    const dateObject = {
      year: date.value.getFullYear(),
      month: date.value.getMonth() + 1,
    };

    //checking if next is January
    if (dateObject.month > 11) {
      dateObject.year++;
      dateObject.month = 0;
    }

    date.value = new Date(dateObject.year, dateObject.month);
    monthDays.value = calculateDays();
  };

  const setPrevMonth = () => {
    const dateObject = {
      year: date.value.getFullYear(),
      month: date.value.getMonth() - 1,
    };

    //checking if previous is December
    if (dateObject.month < 0) {
      dateObject.year--;
      dateObject.month = 11;
    }

    date.value = new Date(dateObject.year, dateObject.month);
    monthDays.value = calculateDays();
  };

  return {
    month: monthDays,
    currentMonthAndYear,
    setNextMonth,
    setPrevMonth,
  };
};
