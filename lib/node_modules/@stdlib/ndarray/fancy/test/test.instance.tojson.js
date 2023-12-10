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
var Complex64Array = require( '@stdlib/array/complex64' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var FancyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FancyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toJSON()` method (row-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toJSON ), true, 'has method' );

	expected = {
		'type': 'ndarray',
		'dtype': 'float64',
		'data': [ 3.0, 4.0, 5.0, 6.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'order': 'row-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = arr.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toJSON()` method (column-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, -2 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toJSON ), true, 'has method' );

	expected = {
		'type': 'ndarray',
		'dtype': 'generic',
		'data': [ 4.0, 3.0, 2.0, 1.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 1, 2 ],
		'order': 'column-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = arr.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toJSON()` method (0d)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [];
	order = 'column-major';
	strides = [ 0 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toJSON ), true, 'has method' );

	expected = {
		'type': 'ndarray',
		'dtype': 'generic',
		'data': [ 3.0 ],
		'shape': [],
		'strides': [ 0 ],
		'order': 'column-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = arr.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toJSON()` method (complex type)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toJSON ), true, 'has method' );

	expected = {
		'type': 'ndarray',
		'dtype': 'complex64',
		'data': [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'order': 'row-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = arr.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
