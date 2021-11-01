import { mount }       from '@vue/test-utils';
import CCalendarHeader from '../calendar-header.component.vue';

const factory = (monthName = 'MAY') => {
  return mount(CCalendarHeader, {
    props: {
      monthName: monthName,
    },
  });
};
describe('Calendar header component', () => {
  let wrapper;
  it('should render wrapper', () => {
    wrapper = factory();
    expect(wrapper.html())
      .not
      .toBeNull();
  });
  it('should render given month', () => {
    let month = 'MAY'
    wrapper = factory(month);
    expect(wrapper.text().includes(month)).toBeTruthy();
    month = 'AUGUST'
    wrapper = factory(month);
    expect(wrapper.text().includes(month)).toBeTruthy();
  });
  it('should emit previous', () => {
    wrapper = factory();
    const arrowPrevious = wrapper.get('.c-calendar-header__icon--previous');
    arrowPrevious.trigger('click');
    expect(wrapper.emitted('prev-month')).toBeTruthy();
  });
  it('should emit next', () => {
    wrapper = factory();
    const arrowNext = wrapper.get('.c-calendar-header__icon--next');
    arrowNext.trigger('click');
    expect(wrapper.emitted('next-month')).toBeTruthy();
  })
});

