import { shallowMount } from '@vue/test-utils';
import CForm            from '../form.component.vue';

describe('Form component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CForm, {
      props: {
        data: {
          price: '232 zł',
          rating: 4.2,
          numberOfRatings: 123,
          disabledDates: [ '2021-10-13', '2021-10-16' ],
          selectedDates: {
            min: '2021-11-01',
            max: '2021-11-23',
          },
        },
      },
    });
  });
  it('should render wrapper', () => {
    expect(wrapper.html())
      .not
      .toBeNull();
  });
});

