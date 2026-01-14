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

tape( 'a FancyArray constructor returns an instance which has a `set` method which throws an error if not provided an integer value for a dimension index (>4d)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;
	var j;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1, 1, 1, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		'5',
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
		for ( j = 0; j < shape.length; j++ ) {
			t.throws( badValue( values[ i ], j ), TypeError, 'throws an error when provided ' + values[ i ] );
		}
	}
	t.end();

	function badValue( value, dim ) {
		return function badValue() {
			var args = new Array( shape.length+1 );
			var i;

			for ( i = 0; i < shape.length; i++ ) {
				if ( i === dim ) {
					args[ i ] = value;
				} else {
					args[ i ] = 0;
				}
			}
			args[ i ] = 10.0;
			arr.set.apply( arr, args );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	arr.set( 0, 0, 0, 0, 0, 5.0 );
	arr.set( 0, 0, 0, 0, 1, 6.0 );
	arr.set( 0, 0, 0, 1, 0, 7.0 );
	arr.set( 0, 0, 0, 1, 1, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 6.0, 7.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	arr.set( 0, 0, 0, 0, 0, 5.0 );
	arr.set( 0, 0, 0, 0, 1, 6.0 );
	arr.set( 0, 0, 0, 1, 0, 7.0 );
	arr.set( 0, 0, 0, 1, 1, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 7.0, 6.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; mode=wrap)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 6.0, 7.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; mode=wrap)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 7.0, 6.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; mode=clamp)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 5.0, 'returns expected value' );

	t.deepEqual( buffer, [ 7.0, 8.0, 3.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; mode=clamp)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 5.0, 'returns expected value' );

	t.deepEqual( buffer, [ 7.0, 2.0, 8.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; mode=throw)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'throw'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 2, 2, 2, 2, 2, 5.0 ],
		[ 0, 0, 0, 0, 11, 6.0 ],
		[ 0, 0, 0, -1, -10, 7.0 ],
		[ 0, 0, 0, -5, 5, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.set.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; mode=throw)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'throw'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 2, 2, 2, 2, 2, 5.0 ],
		[ 0, 0, 0, 0, 11, 6.0 ],
		[ 0, 0, 0, -1, -10, 7.0 ],
		[ 0, 0, 0, -5, 5, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.set.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 2, 2, 2, 2, 2, 5.0 ],
		[ 0, 0, 0, 0, 11, 6.0 ],
		[ 0, 0, 0, -1, -10, 7.0 ],
		[ 0, 0, 0, -5, 5, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.set.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 2, 2, 2, 2, 2, 5.0 ],
		[ 0, 0, 0, 0, 11, 6.0 ],
		[ 0, 0, 0, -1, -10, 7.0 ],
		[ 0, 0, 0, -5, 5, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.set.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; submode=[wrap])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'wrap' ]
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 6.0, 7.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; submode=[wrap,wrap])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'wrap', 'wrap' ]
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 7.0, 6.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; submode=[clamp,clamp,clamp])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'clamp', 'clamp', 'clamp' ]
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 5.0, 'returns expected value' );

	t.deepEqual( buffer, [ 7.0, 8.0, 3.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; submode=[clamp,clamp,clamp,clamp])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'clamp', 'clamp', 'clamp', 'clamp' ]
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );
	arr.set( 0, 0, 0, 0, 11, 6.0 );
	arr.set( 0, 0, 0, -1, -10, 7.0 );
	arr.set( 0, 0, 0, -5, 5, 8.0 );

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 5.0, 'returns expected value' );

	t.deepEqual( buffer, [ 7.0, 2.0, 8.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; submode=[throw,throw])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'submode': [ 'throw', 'throw' ],
		'mode': 'wrap'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 2, 2, 2, 2, 2, 5.0 ],
		[ 0, 0, 0, 0, 11, 6.0 ],
		[ 0, 0, 0, -1, -10, 7.0 ],
		[ 0, 0, 0, -5, 5, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.set.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; submode=[throw])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'submode': [ 'throw' ],
		'mode': 'clamp'
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 2, 2, 2, 2, 2, 5.0 ],
		[ 0, 0, 0, 0, 11, 6.0 ],
		[ 0, 0, 0, -1, -10, 7.0 ],
		[ 0, 0, 0, -5, 5, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.set.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; row-major; submode=[wrap,wrap,clamp,clamp])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'wrap', 'wrap', 'clamp', 'clamp' ]
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );    // (0,0,0,1,0)
	arr.set( 0, 0, 0, 0, 11, 6.0 );   // (0,0,0,0,1)
	arr.set( 0, 0, 0, -1, -10, 7.0 ); // (0,0,0,0,0)
	arr.set( 0, 0, 0, -5, 5, 8.0 );   // (0,0,0,0,1)

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 7.0, 8.0, 5.0, 4.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `set` method for setting an array element using subscripts (>4d; column-major; submode=[wrap,wrap,wrap,wrap,clamp])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'wrap', 'wrap', 'wrap', 'wrap', 'clamp' ]
	};

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 1, 1, 1, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 1, 1, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.set( 2, 2, 2, 2, 2, 5.0 );    // (0,0,0,0,1)
	arr.set( 0, 0, 0, 0, 11, 6.0 );   // (0,0,0,0,1)
	arr.set( 0, 0, 0, -1, -10, 7.0 ); // (0,0,0,1,0)
	arr.set( 0, 0, 0, -5, 5, 8.0 );   // (0,0,0,1,1)

	t.strictEqual( arr.get( 0, 0, 0, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 0, 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 0 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.get( 0, 0, 0, 1, 1 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 7.0, 6.0, 8.0 ], 'has expected values' );

	t.end();
});
