/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var zeros = require( '@stdlib/array/zeros' );
var arraybuffer2ndarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof arraybuffer2ndarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a valid `dtype` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var order;
	var shape;
	var i;

	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'5',
		'generic',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( value, buffer, shape, strides, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `dtype` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var order;
	var shape;
	var i;

	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'5',
		'generic',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( value, buffer, shape, strides, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `buffer` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var dtype;
	var order;
	var shape;
	var i;

	dtype = 'float64';
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, value, shape, strides, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `buffer` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var dtype;
	var order;
	var shape;
	var i;

	dtype = 'float64';
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, value, shape, strides, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `shape` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 1, 3.14 ],
		[ -1, -2 ],
		[ 1, '1' ],
		[ 1, null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, value, strides, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `shape` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 1, 3.14 ],
		[ -1, -2 ],
		[ 1, '1' ],
		[ 1, null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, value, strides, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if the number of ndarray dimensions may cause stack limits to be exceeded', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		1e5,
		1e6
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var shape = zeros( value, 'generic' );
			arraybuffer2ndarray( dtype, buffer, shape, strides, offset, order );
		};
	}
});

tape( 'the function throws an error if the number of ndarray dimensions may cause stack limits to be exceeded (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		1e5,
		1e6
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var shape = zeros( value, 'generic' );
			arraybuffer2ndarray( dtype, buffer, shape, strides, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [ 2, 2 ];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 1, 3.14 ],
		[ -1, -3.14 ],
		[ 1, '1' ],
		[ 1, null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 1.1 ],
		[ 1, 3.14 ],
		[ -1, -3.14 ],
		[ 1, '1' ],
		[ 1, null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		[ 1 ],
		[ 2 ],
		[ 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (options)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [ 2, 2 ];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 1, 3.14 ],
		[ -1, -3.14 ],
		[ 1, '1' ],
		[ 1, null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (options; 0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 1.1 ],
		[ 1, 3.14 ],
		[ -1, -3.14 ],
		[ 1, '1' ],
		[ 1, null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (number of dimensions)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [ 2, 2 ];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		[ 1 ],
		[ 4, 2, 1 ],
		[ 4, 4, 2, 1 ],
		[ 4, 4, 4, 2, 1 ],
		[ 4, 4, 4, 4, 2, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (number of dimensions; 0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		[],
		[ 2, 1 ],
		[ 4, 2, 1 ],
		[ 4, 4, 2, 1 ],
		[ 4, 4, 4, 2, 1 ],
		[ 4, 4, 4, 4, 2, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (number of dimensions; options)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [ 2, 2 ];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		[ 1 ],
		[ 4, 2, 1 ],
		[ 4, 4, 2, 1 ],
		[ 4, 4, 4, 2, 1 ],
		[ 4, 4, 4, 4, 2, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `strides` argument (number of dimensions; options; 0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	shape = [];
	buffer = new ArrayBuffer( 32 );
	order = 'row-major';
	offset = 0;

	values = [
		[],
		[ 2, 1 ],
		[ 4, 2, 1 ],
		[ 4, 4, 2, 1 ],
		[ 4, 4, 4, 2, 1 ],
		[ 4, 4, 4, 4, 2, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `byteOffset` argument', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];

	values = [
		'5',
		-5,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, strides, value, order );
		};
	}
});

tape( 'the function throws an error if not provided a valid `byteOffset` argument (options)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];

	values = [
		'5',
		-5,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, strides, value, order, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid `order` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'c',
		'f',
		'c-style',
		'fortran',
		'fortran-style',
		'row',
		'column',
		'5',
		5,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, strides, offset, value );
		};
	}
});

tape( 'the function throws an error if not provided a valid `order` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		'c',
		'f',
		'c-style',
		'fortran',
		'fortran-style',
		'row',
		'column',
		'5',
		5,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, strides, offset, value, {} );
		};
	}
});

tape( 'the function throws an error if not provided a valid options argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray( dtype, buffer, shape, strides, offset, order, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var order;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	values = [
		'5',
		5,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'mode': value
			};
			arraybuffer2ndarray( dtype, buffer, shape, strides, offset, order, opts );
		};
	}
});

tape( 'the function throws an error if not provided compatible input arguments', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var order;
	var dtype;
	var shape;
	var i;

	dtype = 'float64';
	buffer = new ArrayBuffer( 32 );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	values = [
		[ dtype, [ 0.0 ], shape, strides, offset, order ],
		[ dtype, buffer, [ 3, 2 ], strides, offset, order ],
		[ dtype, buffer, shape, [ 2, 2 ], offset, order ],
		[ dtype, buffer, shape, strides, 2, order ],
		[ dtype, buffer, shape, strides, 20, order ],
		[ dtype, buffer, shape, [ 2, -1 ], 8, order ],
		[ dtype, buffer, shape, [ -2, 1 ], 8, order ],
		[ dtype, buffer, shape, [ -2, 1 ], 1, order ],
		[ dtype, buffer, shape, [ -2, -1 ], 8, order ],
		[ dtype, buffer, shape, [ -2, -1 ], 1, order ],
		[ dtype, buffer, shape, [ -2, -1 ], 2, order ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + JSON.stringify( values[ i ] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2ndarray.apply( null, value );
		};
	}
});
