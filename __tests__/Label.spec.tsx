// import renderer from 'react-test-renderer';
import React from 'react';
import Label from '../src/Label';
declare var expect: any;

// var renderer = require('react-test-renderer');

describe('Label snapshot tests', function () {


    it('should pass', function () {
        var renderer = require('react-test-renderer');
        var Label  = require('../src/Label');
        console.log(Label)
        const tree = renderer.create(<Label/>);

        // expect(tree.toJSON()).toMatchSnapshot();
    });
});