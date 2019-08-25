import { useTempRecords } from '.';
import * as React from 'react';
import { mount } from 'enzyme';

const TestComp = ({ time = 2000 }) => {
  const { allRecords, addRecord } = useTempRecords<string>(time);

  return (
    <div onClick={() => addRecord(`gal_${Math.random()}`, '123')}>
      {allRecords().map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};

describe('useTempRecords', () => {
  it('should remove a record after the TTL has passed', done => {
    const wrapper = mount(<TestComp />);
    wrapper.simulate('click');
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find('span')).toHaveLength(0);
      done();
    }, 3000);
  });

  it("should still dsplay the record if the TTl hasn't passed", done => {
    const wrapper = mount(<TestComp time={4000} />);
    wrapper.simulate('click');
    wrapper.simulate('click');
    wrapper.simulate('click');
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find('span')).toHaveLength(3);
      done();
    }, 2000);
  });
});
