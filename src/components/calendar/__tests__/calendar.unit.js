import { shallowMount } from '@vue/test-utils';
import CCalendar        from '../calendar.component.vue';

describe('Calendar component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CCalendar, {
      props: {
        dateRange: {
          min: '',
          max: '',
        }
      }
    });
  });
  it('should render wrapper', () => {
    expect(wrapper.html())
      .not
      .toBeNull();
  });
});

