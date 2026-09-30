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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getOrder = require( '@stdlib/ndarray/order' );
var findIndexBetween = require( './../lib' ).assign;


// FUNCTIONS //

/**
* Callback function.
*
* @private
* @param {number} v - input value
* @returns {boolean} result
*/
function clbk( v ) {
	return v % 2.0 === 0.0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof findIndexBetween, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( value, 0, 2, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (thisArg)', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( value, 0, 2, y, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( value, 0, 2, y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options, thisArg)', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( value, 0, 2, y, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a zero-dimensional input ndarray-like object', function test( t ) {
	var values;
	var i;
	var y;

	y = zeros( [], {
		'dtype': 'int32'
	});

	values = [
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( zeros( value ), 0, 1, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an ndarray-like object', function test( t ) {
	var values;
	var i;
	var x;

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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an ndarray-like object (thisArg)', function test( t ) {
	var values;
	var i;
	var x;

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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var i;
	var x;

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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an ndarray-like object (options, thisArg)', function test( t ) {
	var values;
	var i;
	var x;

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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, value, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;
	var x;
	var y;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [], {
		'dtype': 'int32'
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
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, y, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (thisArg)', function test( t ) {
	var values;
	var i;
	var x;
	var y;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [], {
		'dtype': 'int32'
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
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, y, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var i;
	var x;
	var y;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [], {
		'dtype': 'int32'
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
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, y, {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options, thisArg)', function test( t ) {
	var values;
	var i;
	var x;
	var y;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [], {
		'dtype': 'int32'
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
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, y, {}, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, y, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (thisArg)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findIndexBetween( x, 0, 2, y, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a `fromIndex` argument which is not an ndarray-like object or an integer', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [ 2 ], {
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
			findIndexBetween( x, value, 2, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a `fromIndex` argument which is not an ndarray-like object or an integer (options)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [ 2 ], {
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
			findIndexBetween( x, value, 2, y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a `toIndex` argument which is not an ndarray-like object or an integer', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [ 2 ], {
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
			findIndexBetween( x, 0, value, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a `toIndex` argument which is not an ndarray-like object or an integer (options)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [ 2 ], {
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
			findIndexBetween( x, 0, value, y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided insufficient number of arguments', function test( t ) {
	var x;
	var y;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	y = zeros( [], {
		'dtype': 'int32'
	});

	t.throws( badValue1, TypeError, 'throws an error when provided insufficient arguments' );
	t.throws( badValue2, TypeError, 'throws an error when provided insufficient arguments' );
	t.throws( badValue3, TypeError, 'throws an error when provided insufficient arguments' );
	t.throws( badValue4, TypeError, 'throws an error when provided insufficient arguments' );
	t.end();

	function badValue1() {
		findIndexBetween( x );
	}

	function badValue2() {
		findIndexBetween( x, 0 );
	}

	function badValue3() {
		findIndexBetween( x, 0, 2, y );
	}

	function badValue4() {
		findIndexBetween();
	}
});

tape( 'the function throws an error if provided a `dim` option which is not an integer', function test( t ) {
	var options;
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			options = {
				'dim': value
			};
			findIndexBetween( x, 0, 2, y, options, clbk );
		};
	}
});

tape( 'the function throws an error if provided a `dim` option which is not an integer (thisArg)', function test( t ) {
	var options;
	var values;
	var opts;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = zeros( [ 2, 2 ], opts );
	y = zeros( [], opts );

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
			options = {
				'dim': value
			};
			findIndexBetween( x, 0, 2, y, options, clbk, {} );
		};
	}
});

tape( 'the function returns the index of the first element which passes a test (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = findIndexBetween( x, 0, 2, y, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element which passes a test (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = findIndexBetween( x, 0, 2, y, clbk );
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an operation dimension (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});
	opts = {
		'dim': 0
	};

	actual = findIndexBetween( x, 0, 2, y, opts, clbk );
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});
	opts = {
		'dim': 1
	};

	actual = findIndexBetween( x, 0, 2, y, opts, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an operation dimension (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});
	opts = {
		'dim': 0
	};

	actual = findIndexBetween( x, 0, 2, y, opts, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});
	opts = {
		'dim': 1
	};

	actual = findIndexBetween( x, 0, 2, y, opts, clbk );
	expected = [ -1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 4.0, -3.0, 6.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = findIndexBetween( x, 1, 3, y, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, -3.0, 2.0, 6.0, 4.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 1, 2 ], 0, 'column-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'column-major'
	});

	actual = findIndexBetween( x, 1, 3, y, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (scalar, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 4.0, -3.0, 6.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	actual = findIndexBetween( x, 1, 3, y, {}, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (0d ndarray)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var toIdx;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 4.0, -3.0, 6.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	fromIdx = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	toIdx = scalar2ndarray( 3, {
		'dtype': 'generic'
	});
	actual = findIndexBetween( x, fromIdx, toIdx, y, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (0d ndarray, options)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var toIdx;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 4.0, -3.0, 6.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	fromIdx = scalar2ndarray( 1, {
		'dtype': 'int32'
	});
	toIdx = scalar2ndarray( 3, {
		'dtype': 'int32'
	});
	actual = findIndexBetween( x, fromIdx, toIdx, y, {}, clbk );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (scalar, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 4.0, -3.0, 6.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 3, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	opts = {
		'dim': 0
	};
	actual = findIndexBetween( x, 1, 3, y, opts, clbk );
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (0d ndarray, broadcasted)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var toIdx;
	var opts;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 4.0, -3.0, 6.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 3, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	fromIdx = scalar2ndarray( 1, {
		'dtype': 'int32'
	});
	toIdx = scalar2ndarray( 3, {
		'dtype': 'int32'
	});
	opts = {
		'dim': 0
	};
	actual = findIndexBetween( x, fromIdx, toIdx, y, opts, clbk );
	expected = [ 1, -1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a starting and ending search index (1d ndarray)', function test( t ) {
	var expected;
	var fromIdx;
	var actual;
	var toIdx;
	var opts;
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 4.0, -3.0, 6.0, -5.0 ];
	x = new ndarray( 'generic', xbuf, [ 3, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	fromIdx = new ndarray( 'generic', [ 1, 0 ], [ 2 ], [ 1 ], 0, 'row-major' );
	toIdx = new ndarray( 'generic', [ 3, 3 ], [ 2 ], [ 1 ], 0, 'row-major' );
	opts = {
		'dim': 0
	};
	actual = findIndexBetween( x, fromIdx, toIdx, y, opts, clbk );
	expected = [ 1, 0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var xbuf;
	var ctx;
	var x;
	var y;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = zeros( [ 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});
	ctx = {
		'count': 0
	};

	values = [];
	indices = [];
	arrays = [];

	actual = findIndexBetween( x, 0, 2, y, clbk1, ctx );
	expected = [ 1, 1 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( y, actual, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [
		-1.0,
		2.0,
		-3.0,
		4.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 0, 1 ],
		[ 1, 0 ],
		[ 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk1( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v % 2.0 === 0.0;
	}
});
