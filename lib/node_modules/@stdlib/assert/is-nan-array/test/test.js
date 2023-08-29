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
var isNaNArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNaNArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only `NaN` values', function test( t ) {
	var arr;

	arr = [ NaN, new Number( NaN ), NaN ];
	t.equal( isNaNArray( arr ), true, 'returns true' );

	arr = new Float64Array( [ NaN, NaN ] );
	t.equal( isNaNArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': NaN,
		'1': NaN
	};
	t.equal( isNaNArray( arr ), true, 'returns true' );

	arr = [ NaN, 3, NaN ];
	t.equal( isNaNArray( arr ), false, 'returns false' );

	arr = [ NaN, null, NaN ];
	t.equal( isNaNArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'attached to the main export is a method to test for an array-like object containing only primitive `NaN` values', function test( t ) {
	var arr;

	arr = [ NaN, NaN, NaN ];
	t.equal( isNaNArray.primitives( arr ), true, 'returns true' );

	arr = new Float64Array( [ NaN, NaN ] );
	t.equal( isNaNArray.primitives( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': NaN,
		'1': NaN
	};
	t.equal( isNaNArray.primitives( arr ), true, 'returns true' );

	arr = [ new Number( NaN ), NaN, NaN ];
	t.equal( isNaNArray.primitives( arr ), false, 'returns false' );

	arr = new Float64Array( [ 2.3, NaN ] );
	t.equal( isNaNArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'attached to the main export is a method to test for an array-like object containing only object `NaN` values', function test( t ) {
	var arr;

	arr = [ NaN, NaN, NaN ];
	t.equal( isNaNArray.objects( arr ), false, 'returns false' );

	arr = [ new Number( NaN ), NaN, NaN ];
	t.equal( isNaNArray.objects( arr ), false, 'returns false' );

	arr = {
		'length': 2,
		'0': new Number( NaN ),
		'1': new Number( NaN )
	};
	t.equal( isNaNArray.objects( arr ), true, 'returns true' );

	arr = [ new Number( NaN ), new Number( NaN ), new Number( NaN ) ];
	t.equal( isNaNArray.objects( arr ), true, 'returns true' );

	arr = new Float64Array( [ NaN, NaN, NaN ] );
	t.equal( isNaNArray.objects( arr ), false, 'returns false' );

	t.end();
});
