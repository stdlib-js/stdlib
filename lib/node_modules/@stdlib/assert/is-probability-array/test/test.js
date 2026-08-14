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

	arr = [ 0.9, new Number( 0.8 ), 0.0 ];
	t.strictEqual( isProbabilityArray( arr ), true, 'returns expected value' );

	arr = new Float64Array( [ 0.9, 0.5, 0.3 ] );
	t.strictEqual( isProbabilityArray( arr ), true, 'returns expected value' );

	arr = {
		'length': 2,
		'0': 0.3,
		'1': 0.8
	};
	t.strictEqual( isProbabilityArray( arr ), true, 'returns expected value' );

	arr = [ 0.9, '3', null ];
	t.strictEqual( isProbabilityArray( arr ), false, 'returns expected value' );

	arr = new Float64Array( [ 0.9, NaN, 0.3 ] );
	t.strictEqual( isProbabilityArray( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only primitive probabilities', function test( t ) {
	var arr;

	arr = [ 1.0, 0.0 ];
	t.strictEqual( isProbabilityArray.primitives( arr ), true, 'returns expected value' );

	arr = new Float64Array( [ 0.9, 0.5, 0.3 ] );
	t.strictEqual( isProbabilityArray( arr ), true, 'returns expected value' );

	arr = [ new Number( 5 ), 1.0, 1.0 ];
	t.strictEqual( isProbabilityArray.primitives( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only containing only Number objects whose values are probabilities', function test( t ) {
	var arr;

	arr = [ new Number( 0.5 ), new Number( 0.5 ) ];
	t.strictEqual( isProbabilityArray.objects( arr ), true, 'returns expected value' );

	arr = {
		'length': 2,
		'0': new Number( 0.3 ),
		'1': new Number( 0.8 )
	};
	t.strictEqual( isProbabilityArray( arr ), true, 'returns expected value' );

	arr = [ 0.5, 0.0 ];
	t.strictEqual( isProbabilityArray.objects( arr ), false, 'returns expected value' );

	t.end();
});
