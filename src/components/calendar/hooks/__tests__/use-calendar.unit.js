import {
  CURRENT,
  monthNames,
  NEXT,
  PREVIOUS,
  useCalendar,
} from '../use-calendar';

describe('Calendar hook', () => {
  let hook;

  beforeEach(() => {
    hook = useCalendar();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('should return month with elements from previous and next month', () => {
    if(new Date().getDay() !== 0) {
      expect(hook.month.value[0].month === PREVIOUS).toBeTruthy()
    }
    if(hook.month.value[hook.month.value.length - 1].month !== CURRENT){
      expect(hook.month.value[hook.month.value.length - 1].month === NEXT)
    }
    expect(hook.month.value.some(value => value.month === CURRENT));
  });

  it('should return month with date objects', () => {
    expect(hook.month.value.every(day =>
      Object.prototype.toString.call(day.date) === '[object Date]'
    )).toBeTruthy()
  });
  it('should return month with days in order', () => {
    expect(hook.month.value.every((day, index, array) => {
      const nextDate = new Date(day.date.getFullYear(), day.date.getMonth(), day.date.getDate() + 1);
      if(index + 1 === array.length){
        return true;
      }
      return array[index + 1].date.getTime() === nextDate.getTime()
    } )).toBeTruthy()
  });
  it('should return current year and month', () => {
    const expectation = `${monthNames[new Date().getMonth()]} ${new Date().getFullYear()}`
    expect(hook.currentMonthAndYear.value).toBe(expectation);
  })
});
