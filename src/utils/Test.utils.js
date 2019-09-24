import React from 'react';
import renderer from 'react-test-renderer';

const singleSnapTest = (tree, description) => {
  it(description, () => {
    expect(tree).toMatchSnapshot();
  });
};

export const testSnapshots = (Component, configs) => {
  describe('snapshots', () => {
    configs.forEach(config => {
      const {props, description} = config;

      const tree = renderer.create(<Component {...props} />);
      singleSnapTest(tree, description);
    });
  });
};
