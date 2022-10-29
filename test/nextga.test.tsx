import * as React from 'react';
import {NextGA} from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    expect(<NextGA mId='G-PGDL12C7R2' />).toBeInstanceOf(Object)
  });
});
