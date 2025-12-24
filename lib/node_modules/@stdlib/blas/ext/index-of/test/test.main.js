/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var Int32Array = require( '@stdlib/array/int32' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var indexOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof indexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, scalar2ndarray( 2.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=scalar)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, 2.0, 0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=scalar)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, scalar2ndarray( 2.0 ), 0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=ndarray)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, 2.0, scalar2ndarray( 0, {
				'dtype': 'generic'
			}));
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=ndarray)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, scalar2ndarray( 2.0 ), scalar2ndarray( 0, {
				'dtype': 'generic'
			}));
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, options)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, 2.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, options)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, scalar2ndarray( 2.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=scalar, options)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, 2.0, 0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=scalar, options)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, scalar2ndarray( 2.0 ), 0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=scalar, fromIndex=ndarray, options)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, 2.0, scalar2ndarray( 0, {
				'dtype': 'generic'
			}), {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (searchElement=ndarray, fromIndex=ndarray, options)', function test( t ) {
	var values;
	var i;

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
			indexOf( value, scalar2ndarray( 2.0 ), scalar2ndarray( 0, {
				'dtype': 'generic'
			}), {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is a zero-dimensional ndarray', function test( t ) {
	var values;
	var opts;
	var i;

	opts = {
		'dtype': 'generic'
	};

	values = [
		scalar2ndarray( 10.0 ),
		scalar2ndarray( -3.0 ),
		scalar2ndarray( 0.0 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( value, scalar2ndarray( 2.0 ), scalar2ndarray( 0, opts ), {} ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an ndarray-like object, an integer, or an object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	values = [
		'5',
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
			indexOf( x, scalar2ndarray( 2.0 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided insufficient number of arguments', function test( t ) {
	var x;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	t.throws( badValue1, TypeError, 'throws an error when provided insufficient arguments' );
	t.throws( badValue2, TypeError, 'throws an error when provided insufficient arguments' );
	t.end();

	function badValue1() {
		indexOf( x );
	}

	function badValue2() {
		indexOf();
	}
});

tape( 'the function throws an error if provided a search element which is not broadcast-compatible with the first argument', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( x, value );
		};
	}
});

tape( 'the function throws an error if provided an search element which is not broadcast-compatible with the first argument (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a from index which is not broadcast-compatible with the first argument', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( x, scalar2ndarray( 0 ), value );
		};
	}
});

tape( 'the function throws an error if provided a from index which is not broadcast-compatible with the first argument (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( x, scalar2ndarray( 0 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
			indexOf( x, 10.0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		'5',
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
			indexOf( x, scalar2ndarray( 10.0, opts ), value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=scalar, fromIndex=scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

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
			indexOf( x, 10.0, 0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=ndarray, fromIndex=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			indexOf( x, scalar2ndarray( 10.0, opts ), scalar2ndarray( 0, opts ), value ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=scalar, fromIndex=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );

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
			indexOf( x, 10.0, scalar2ndarray( 0, opts ), value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (searchElement=ndarray, fromIndex=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );

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
			indexOf( x, scalar2ndarray( 10.0, opts ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided a `dtype` option which is not a supported data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'bool',
		'float64',
		'float32',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( x, 10.0, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dim` option which is not an integer', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'a' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( x, 10.0, {
				'dim': value
			});
		};
	}
});

tape( 'the function returns the first index of a specified search element in an ndarray (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0 );
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0 );
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of a specified search element in an ndarray (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0 );
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0 );
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the operation dimension (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0, {
		'dim': 0
	});
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0, {
		'dim': 0
	});
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0, {
		'dim': 1
	});
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0, {
		'dim': 1
	});
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the operation dimension (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, {
		'dim': 0
	});
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0, {
		'dim': 0
	});
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, {
		'dim': 1
	});
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0, {
		'dim': 1
	});
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the `keepdims` option (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0, {
		'keepdims': true
	});
	expected = [ [ 1 ], [ 1 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0, {
		'keepdims': true
	});
	expected = [ [ 1 ], [ 1 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the `keepdims` option (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, {
		'keepdims': true
	});
	expected = [ [ -1 ], [ 0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = indexOf( x, 2.0, 0, {
		'keepdims': true
	});
	expected = [ [ -1 ], [ 0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output array data type', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0, {
		'dtype': 'int32'
	});
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'int32', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, 0, {
		'dtype': 'int32'
	});
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'int32', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (scalar)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0, 2 );
	expected = [ 3, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, 2 );
	expected = [ -1, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (scalar, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0, 2, {} );
	expected = [ 3, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, 2, {} );
	expected = [ -1, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (0d ndarray)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );

	fromIdx = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	actual = indexOf( x, 2.0, fromIdx );
	expected = [ 3, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, fromIdx );
	expected = [ -1, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (0d ndarray, options)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;

	/*
	* [
	*    -1.0,  2.0, -3.0,  2.0, -5.0,
	*     6.0, -7.0,  2.0, -8.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );

	fromIdx = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	actual = indexOf( x, 2.0, fromIdx, {} );
	expected = [ 3, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	/*
	* [
	*     -1.0, -3.0, -5.0, -7.0, -8.0,
	*      2.0,  2.0,  6.0,  2.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 5 ], [ 1, 2 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, fromIdx, {} );
	expected = [ -1, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (scalar, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	/*
	* [
	*     -1.0, 2.0,
	*     -3.0, 2.0,
	*     -5.0, 6.0,
	*     -7.0, 2.0,
	*     -8.0, 2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = indexOf( x, 2.0, 2, {
		'dim': 0
	});
	expected = [ -1, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	/*
	* [
	*     -1.0,  6.0,
	*      2.0, -7.0,
	*     -3.0,  2.0,
	*      2.0, -8.0,
	*     -5.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 1, 5 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, 2, {
		'dim': 0
	});
	expected = [ 3, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (0d ndarray, broadcasted)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;

	/*
	* [
	*     -1.0, 2.0,
	*     -3.0, 2.0,
	*     -5.0, 6.0,
	*     -7.0, 2.0,
	*     -8.0, 2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );

	fromIdx = scalar2ndarray( 2, {
		'dtype': 'int32'
	});
	actual = indexOf( x, 2.0, fromIdx, {
		'dim': 0
	});
	expected = [ -1, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	/*
	* [
	*     -1.0,  6.0,
	*      2.0, -7.0,
	*     -3.0,  2.0,
	*      2.0, -8.0,
	*     -5.0,  2.0
	* ]
	*/
	xbuf = [ -1.0, 2.0, -3.0, 2.0, -5.0, 6.0, -7.0, 2.0, -8.0, 2.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 1, 5 ], 0, 'column-major' );

	actual = indexOf( x, 2.0, fromIdx, {
		'dim': 0
	});
	expected = [ 3, 2 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a from index (1d ndarray)', function test( t ) {
	var searchElement;
	var expected;
	var fromIdx;
	var actual;
	var xbuf;
	var x;

	/*
	* [
	*     1.0, -2.0,
	*     2.0, -3.0,
	*     3.0, -4.0,
	*     2.0, -3.0,
	*     5.0, -6.0
	* ]
	*/
	xbuf = [ 1.0, -2.0, 2.0, -3.0, 3.0, -4.0, 2.0, -3.0, 5.0, -6.0 ];
	x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );

	fromIdx = new ndarray( 'int32', new Int32Array( [ 2, 2 ] ), [ 2 ], [ 1 ], 0, 'row-major' );
	searchElement = new ndarray( 'generic', [ 2.0, -3.0 ], [ 2 ], [ 1 ], 0, 'row-major' );
	actual = indexOf( x, searchElement, fromIdx, {
		'dim': 0
	});
	expected = [ 3, 3 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
