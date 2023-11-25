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
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var ndarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method which throws an error if not provided an integer value (1d)', function test( t ) {
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
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get( value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.get( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 3 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var v;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );
	v = arr.get( 1 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );
	v = arr.get( 2 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );
	v = arr.get( 3 );
	t.strictEqual( realf( v ), 7.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 8.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.get( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 3 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var v;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );
	v = arr.get( 1 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );
	v = arr.get( 2 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );
	v = arr.get( 3 );
	t.strictEqual( realf( v ), 7.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 8.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=wrap)', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=wrap; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );
	v = arr.get( 4 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );
	v = arr.get( 5 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );
	v = arr.get( -2 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );
	v = arr.get( -1 );
	t.strictEqual( realf( v ), 7.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 8.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; mode=wrap)', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=clamp)', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=clamp; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );
	v = arr.get( 4 );
	t.strictEqual( realf( v ), 7.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 8.0, 'returns expected value' );
	v = arr.get( 5 );
	t.strictEqual( realf( v ), 7.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 8.0, 'returns expected value' );
	v = arr.get( -2 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );
	v = arr.get( -1 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; mode=clamp)', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=throw)', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -2 ],
		[ -1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=throw; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;
	var i;

	opts = {
		'mode': 'throw'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -2 ],
		[ -1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; mode=throw)', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -2 ],
		[ -1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=normalize)', function test( t ) {
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
		'mode': 'normalize'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -3 ), 2.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -20 ],
		[ -10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=normalize; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;
	var i;

	opts = {
		'mode': 'normalize'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );

	v = arr.get( -3 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -20 ],
		[ -11 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; mode=normalize)', function test( t ) {
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
		'mode': 'normalize'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -3 ), 2.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -20 ],
		[ -10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -2 ],
		[ -1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -2 ],
		[ -1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; submode=[wrap])', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; submode=[wrap])', function test( t ) {
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; submode=[clamp])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'clamp' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; submode=[clamp])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'clamp' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; submode=[throw])', function test( t ) {
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
		'mode': 'clamp',
		'submode': [ 'throw' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -2 ],
		[ -1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; submode=[throw])', function test( t ) {
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
		'mode': 'wrap',
		'submode': [ 'throw' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -2 ],
		[ -1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; submode=[normalize])', function test( t ) {
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
		'mode': 'clamp',
		'submode': [ 'normalize' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -3 ), 2.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -20 ],
		[ -10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; submode=[normalize])', function test( t ) {
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
		'mode': 'wrap',
		'submode': [ 'normalize' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -3 ), 2.0, 'returns expected value' );

	values = [
		[ 4 ],
		[ 5 ],
		[ -20 ],
		[ -10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.get.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; submode=[wrap,clamp])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'wrap', 'clamp' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; submode=[wrap,throw])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'wrap', 'throw' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; row-major; submode=[clamp,wrap])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'clamp', 'wrap' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has a `get` method for retrieving an array element using subscripts (1d; column-major; submode=[clamp,throw])', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'submode': [ 'clamp', 'throw' ]
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.get( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.get( 4 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.get( -2 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.get( -1 ), 1.0, 'returns expected value' );

	t.end();
});
