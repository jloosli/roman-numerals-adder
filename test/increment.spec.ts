import {expect} from 'chai';
import {increment} from '../src';

describe('incrementing I-III', () => {
  it('increment(I) should return II', () => {
    expect(increment('I')).to.eq('II');
  });
  it('increment(II) should return III', () => {
    expect(increment('II')).to.eq('III');
  });
  it('increment(III) should return IV', () => {
    expect(increment('III')).to.eq('IV');
  });
});

describe('incrementing IV-X', () => {
  it('increment(IV) should return V', () => {
    expect(increment('IV')).to.eq('V');
  });
});
