import { mount } from '@vue/test-utils';
import CRating   from '../rating.component.vue';

describe('Rating component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CRating, {
      props: {
        rating: 4.3,
        numberOfRatings: 123,
      },
    });
  });
  it('should render wrapper', () => {
    expect(wrapper.html())
      .not
      .toBeNull();
  });
  it('should render exact amount of full stars', () => {
    wrapper = mount(CRating, {
      props: {
        rating: 4,
        numberOfRatings: 1,
      }
    })
    expect(wrapper.findAllComponents('.c-rating__star--filled').length).toBe(4);
    wrapper = mount(CRating, {
      props: {
        rating: 3,
        numberOfRatings: 1,
      }
    })
    expect(wrapper.findAllComponents('.c-rating__star--filled').length).toBe(3);
  });
  it('should render correct number of filled star', () => {
    expect(wrapper.findAllComponents('.c-rating__star--filled').length).toBe(5);
    wrapper = mount(CRating, {
      props: {
        rating: 3.3,
        numberOfRatings: 1,
      }
    })
    expect(wrapper.findAllComponents('.c-rating__star--filled').length).toBe(4);
    wrapper = mount(CRating, {
      props: {
        rating: 3.2,
        numberOfRatings: 1,
      }
    })
    expect(wrapper.findAllComponents('.c-rating__star--filled').length).toBe(3);
    wrapper = mount(CRating, {
      props: {
        rating: 3.8,
        numberOfRatings: 1,
      }
    })
    expect(wrapper.findAllComponents('.c-rating__star--filled').length).toBe(4);
  })
});

