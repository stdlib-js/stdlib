/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var Number = require( '@stdlib/number/ctor' );
var isProbabilityArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isProbabilityArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only probabilities', function test( t ) {
	var arr;

	arr = [ 0.9, new Number( 0.8 ), 0.0 ]; // eslint-disable-line no-new-wrappers
	t.equal( isProbabilityArray( arr ), true, 'returns true' );

	arr = new Float64Array( [ 0.9, 0.5, 0.3 ] );
	t.equal( isProbabilityArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': 0.3,
		'1': 0.8
	};
	t.equal( isProbabilityArray( arr ), true, 'returns true' );

	arr = [ 0.9, '3', null ];
	t.equal( isProbabilityArray( arr ), false, 'returns false' );

	arr = new Float64Array( [ 0.9, NaN, 0.3 ] );
	t.equal( isProbabilityArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only primitive probabilities', function test( t ) {
	var arr;

	arr = [ 1.0, 0.0 ];
	t.equal( isProbabilityArray.primitives( arr ), true, 'returns true' );

	arr = new Float64Array( [ 0.9, 0.5, 0.3 ] );
	t.equal( isProbabilityArray( arr ), true, 'returns true' );

	arr = [ new Number( 5 ), 1.0, 1.0 ]; // eslint-disable-line no-new-wrappers
	t.equal( isProbabilityArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only containing only Number objects whose values are probabilities', function test( t ) {
	var arr;

	arr = [ new Number( 0.5 ), new Number( 0.5 ) ]; // eslint-disable-line no-new-wrappers
	t.equal( isProbabilityArray.objects( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': new Number( 0.3 ), // eslint-disable-line no-new-wrappers
		'1': new Number( 0.8 )  // eslint-disable-line no-new-wrappers
	};
	t.equal( isProbabilityArray( arr ), true, 'returns true' );

	arr = [ 0.5, 0.0 ];
	t.equal( isProbabilityArray.objects( arr ), false, 'returns false' );

	t.end();
});
