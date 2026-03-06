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

tape( 'a FancyArray constructor returns an instance which has an `iset` method which throws an error if not provided an integer value for the first argument (1d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset( value, 0.0 );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	arr.iset( 0, 5.0 );
	arr.iset( 1, 6.0 );
	arr.iset( 2, 7.0 );
	arr.iset( 3, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 6.0, 7.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	arr.iset( 0, 5.0 );
	arr.iset( 1, 6.0 );
	arr.iset( 2, 7.0 );
	arr.iset( 3, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 8.0, 7.0, 6.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	arr.iset( 0, 5.0 );
	arr.iset( 1, 6.0 );
	arr.iset( 2, 7.0 );
	arr.iset( 3, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 6.0, 7.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	arr.iset( 0, 5.0 );
	arr.iset( 1, 6.0 );
	arr.iset( 2, 7.0 );
	arr.iset( 3, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 7.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 8.0, 'returns expected value' );

	t.deepEqual( buffer, [ 8.0, 7.0, 6.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=wrap)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 7.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 6.0, 8.0, 7.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=wrap)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 7.0, 'returns expected value' );

	t.deepEqual( buffer, [ 7.0, 8.0, 6.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=wrap)', function test( t ) {
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
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 7.0, 'returns expected value' );

	t.deepEqual( buffer, [ 5.0, 6.0, 8.0, 7.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=wrap)', function test( t ) {
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
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 5.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 6.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 7.0, 'returns expected value' );

	t.deepEqual( buffer, [ 7.0, 8.0, 6.0, 5.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=clamp)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 6.0, 'returns expected value' );

	t.deepEqual( buffer, [ 8.0, 2.0, 3.0, 6.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=clamp)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 6.0, 'returns expected value' );

	t.deepEqual( buffer, [ 6.0, 2.0, 3.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=clamp)', function test( t ) {
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
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 6.0, 'returns expected value' );

	t.deepEqual( buffer, [ 8.0, 2.0, 3.0, 6.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=clamp)', function test( t ) {
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
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	arr.iset( 4, 5.0 );
	arr.iset( 5, 6.0 );
	arr.iset( -1, 7.0 );
	arr.iset( -2, 8.0 );

	t.strictEqual( arr.iget( 0 ), 8.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 6.0, 'returns expected value' );

	t.deepEqual( buffer, [ 6.0, 2.0, 3.0, 8.0 ], 'has expected values' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=throw)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=throw)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 1.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=throw)', function test( t ) {
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
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=throw)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 1.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=default)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; row-major; mode=default)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 1.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=default)', function test( t ) {
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
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 4.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});

tape( 'a FancyArray constructor returns an instance which has an `iset` method for setting an array element using a linear index (1d; column-major; mode=default)', function test( t ) {
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
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 4, 5.0 ],
		[ 5, 6.0 ],
		[ -1, 7.0 ],
		[ -2, 8.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided arguments: ' + values[ i ] );
	}
	t.strictEqual( arr.iget( 0 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 1.0, 'returns expected value' );

	t.deepEqual( buffer, [ 1.0, 2.0, 3.0, 4.0 ], 'has expected values' );

	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iset.apply( arr, value );
		};
	}
});
