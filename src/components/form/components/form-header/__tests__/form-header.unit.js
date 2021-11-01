import { shallowMount } from '@vue/test-utils';
import CFormHeader            from '../form-header.component.vue';

describe('Form header component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CFormHeader, {
      props: {
          price: '232 zł',
          rating: 4.2,
          numberOfRatings: 123,
      },
    });
  });
  it('should render wrapper', () => {
    expect(wrapper.html())
      .not
      .toBeNull();
  });
});

