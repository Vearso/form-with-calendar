import { shallowMount } from '@vue/test-utils';
import CFormDatePicker            from '../form-date-picker.component.vue';

describe('Form date picker component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CFormDatePicker, {
      props: {
        modelValue: {

        },
        label: 'Dates',
      },
    });
  });
  it('should render wrapper', () => {
    expect(wrapper.html())
      .not
      .toBeNull();
  });
  it('should emit toggle calendar on placeholder click', () => {
    const placeholder = wrapper.find('.c-form-date-picker__select__placeholder')
    placeholder.trigger('click');
    expect(wrapper.emitted('toggle-calendar')).toBeTruthy()
  })
});

