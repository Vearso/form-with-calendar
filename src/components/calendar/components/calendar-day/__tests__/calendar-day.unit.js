import {
  mount,
}                       from '@vue/test-utils';
import CCalendarDay     from '../calendar-day.vue';
import {
  CURRENT,
  PREVIOUS,
  NEXT
}                       from '@/components/calendar/hooks/use-calendar';
import { startOfToday } from 'date-fns';

const factory = (props) => {
  return mount(CCalendarDay, {
    props: {
      ...props,
    },
  });
};
describe('Calendar header component', () => {
  let wrapper;
  it('should render wrapper', () => {
    wrapper = factory({
      day: {
        date: new Date(),
        label: 1,
        month: CURRENT,
      },
    });
    expect(wrapper.html())
      .not
      .toBeNull();
  });
  it('should render correct classes', () => {
    wrapper = factory({
      day: {
        date: new Date(),
        label: 1,
        month: PREVIOUS,
      },
    });
    expect(wrapper.classes().includes('c-calendar-day--inactive')).toBeTruthy();
    wrapper = factory({
      day: {
        date: new Date(),
        label: 1,
        month: NEXT,
      }
    })
    expect(wrapper.classes().includes('c-calendar-day--inactive')).toBeTruthy();
    wrapper = factory({
      day: {
        date: new Date(),
        label: 1,
        month: CURRENT,
      }
    })
    expect(wrapper.classes().includes('c-calendar-day--inactive')).not.toBeTruthy();
  });
  it('should render today class if day date is start of current day', () => {
    wrapper = factory({
      day: {
        date: startOfToday(),
        label: 1,
        month: NEXT,
      },
    });
    expect(wrapper.classes().includes('c-calendar-day--today')).toBeTruthy();
  })
});

