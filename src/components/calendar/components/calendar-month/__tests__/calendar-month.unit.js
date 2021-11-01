import { shallowMount } from '@vue/test-utils';
import CCalendarMonth   from '../calendar-month.component.vue';
import { CURRENT }      from '@/components/calendar/hooks/use-calendar';

const factory = (month = [], disabledDates = []) => {
  return shallowMount(CCalendarMonth, {
    props: {
      selectedDates: {
        min: new Date(2021,10,1),
        max: new Date(2021,10,14),
      },
      month: month,
      disabledDates: disabledDates,
    }
  })
}
describe('Calendar month component', () => {
  let wrapper;

  it('should render wrapper', () => {
    wrapper = factory();
    expect(wrapper.html())
      .not
      .toBeNull();
  });
  it('should render day of week labels', () => {
    wrapper = factory();
    expect(wrapper.html().includes('SUN')).toBeTruthy();
    expect(wrapper.html().includes('MON')).toBeTruthy();
    expect(wrapper.html().includes('TUE')).toBeTruthy();
    expect(wrapper.html().includes('WED')).toBeTruthy();
    expect(wrapper.html().includes('THU')).toBeTruthy();
    expect(wrapper.html().includes('FRI')).toBeTruthy();
    expect(wrapper.html().includes('SAT')).toBeTruthy();
  });
  it('should render correct selection classes', () => {
    wrapper = factory([{date: new Date(2021,10,1)}])
    expect(wrapper.html().includes('c-calendar-day__range--start')).toBeTruthy();
    expect(wrapper.html().includes('c-calendar-day__range--middle')).not.toBeTruthy();
    expect(wrapper.html().includes('c-calendar-day__range--end')).not.toBeTruthy();
    wrapper = factory([{date: new Date(2021,10,2)}])
    expect(wrapper.html().includes('c-calendar-day__range--middle')).toBeTruthy();
    expect(wrapper.html().includes('c-calendar-day__range--start')).not.toBeTruthy();
    expect(wrapper.html().includes('c-calendar-day__range--end')).not.toBeTruthy()
    wrapper = factory([{date: new Date(2021,10,14)}])
    expect(wrapper.html().includes('c-calendar-day__range--end')).toBeTruthy()
    expect(wrapper.html().includes('c-calendar-day__range--start')).not.toBeTruthy();
    expect(wrapper.html().includes('c-calendar-day__range--middle')).not.toBeTruthy();
  });
  it('should render inactive class when day is disabled', () => {
    wrapper = factory([{date: new Date(2021,10,1), label: 1, month: CURRENT}], ['2021-11-01']);
    expect(wrapper.html().includes('c-calendar-day--inactive')).toBeTruthy();
  });
});
