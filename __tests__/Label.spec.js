import renderer from 'react-test-renderer';
import React from 'react';
import Label from '../src/Label';

describe('Label snapshot tests', function () {
    it('should pass', function () {
        const tree = renderer.create(<Label/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});