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

/* eslint-disable no-new */

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

tape( 'the constructor throws an error if not provided a valid `dtype` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var order;
	var shape;
	var i;

	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( value, buffer, shape, strides, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `dtype` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var order;
	var shape;
	var i;

	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( value, buffer, shape, strides, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `buffer` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var dtype;
	var order;
	var shape;
	var i;

	dtype = 'generic';
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
		{
			'length': 10,
			'get': function noop() {},
			'set': true
		},
		{
			'length': 10,
			'get': true,
			'set': function noop() {}
		},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new FancyArray( dtype, value, shape, strides, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `buffer` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var dtype;
	var order;
	var shape;
	var i;

	dtype = 'generic';
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
		{
			'length': 10,
			'get': function noop() {},
			'set': true
		},
		{
			'length': 10,
			'get': true,
			'set': function noop() {}
		},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new FancyArray( dtype, value, shape, strides, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `shape` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, value, strides, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `shape` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, value, strides, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if the number of array dimensions may cause stack limits to be exceeded', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
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
			var shape = new Float64Array( value );
			new FancyArray( dtype, buffer, shape, strides, offset, order );
		};
	}
});

tape( 'the constructor throws an error if the number of array dimensions may cause stack limits to be exceeded (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var order;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
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
			var shape = new Float64Array( value );
			new FancyArray( dtype, buffer, shape, strides, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [ 2, 2 ];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (options)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [ 2, 2 ];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (options; 0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (number of dimensions)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [ 2, 2 ];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (number of dimensions; 0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (number of dimensions; options)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [ 2, 2 ];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `strides` argument (number of dimensions; options; 0d)', function test( t ) {
	var values;
	var offset;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	shape = [];
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, value, offset, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `offset` argument', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, strides, value, order );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `offset` argument (options)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var dtype;
	var order;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, strides, value, order, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `order` argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, strides, offset, value );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid `order` argument (options)', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, strides, offset, value, {} );
		};
	}
});

tape( 'the constructor throws an error if not provided a valid options argument', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var order;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, strides, offset, order, value ); // eslint-disable-line max-len
		};
	}
});

tape( 'the constructor throws an error if provided an invalid option', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var dtype;
	var shape;
	var order;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
			new FancyArray( dtype, buffer, shape, strides, offset, order, opts ); // eslint-disable-line max-len
		};
	}
});

tape( 'the constructor throws an error if not provided compatible input arguments', function test( t ) {
	var strides;
	var values;
	var offset;
	var buffer;
	var order;
	var dtype;
	var shape;
	var i;

	dtype = 'generic';
	buffer = [ 0.0, 1.0, 2.0, 3.0 ];
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
		[ dtype, buffer, shape, [ 2, -1 ], offset, order ],
		[ dtype, buffer, shape, [ -2, 1 ], offset, order ],
		[ dtype, buffer, shape, [ -2, 1 ], 1, order ],
		[ dtype, buffer, shape, [ -2, -1 ], offset, order ],
		[ dtype, buffer, shape, [ -2, -1 ], 1, order ],
		[ dtype, buffer, shape, [ -2, -1 ], 2, order ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + JSON.stringify( values[ i ] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			FancyArray.apply( null, value );
		};
	}
});
