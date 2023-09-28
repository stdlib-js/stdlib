/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var FancyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FancyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method which throws an error if provided index arguments (0d)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		'5',
		0,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.set( value, 10.0 );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	arr.set( 5.0 );

	t.strictEqual( arr.get(), 5.0, 'returns expected value' );
	t.deepEqual( buffer, [ 1.0, 2.0, 5.0, 4.0 ], 'has expected values' );

	t.end();
});
