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
var Int32Array = require( '@stdlib/array/int32' );
var isSameArray = require( '@stdlib/assert/is-same-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var circshift = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof circshift, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
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
			circshift( value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (ndarray k)', function test( t ) {
	var values;
	var k;
	var i;

	k = scalar2ndarray( 2, {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( value, k );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
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
			circshift( value, 2, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (ndarray k, options)', function test( t ) {
	var values;
	var k;
	var i;

	k = scalar2ndarray( 2, {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( value, k, {} );
		};
	}
});

tape( 'the function throws an error if provided a `k` argument which is not an ndarray-like object or an integer', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'invalid',
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
			circshift( x, value );
		};
	}
});

tape( 'the function throws an error if provided a `k` argument which is not an ndarray-like object or an integer (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'invalid',
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
			circshift( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a `k` argument which is not broadcast-compatible', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'int32'
	};
	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

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
			circshift( x, value );
		};
	}
});

tape( 'the function throws an error if provided a `k` argument which is not broadcast-compatible (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'int32'
	};
	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

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
			circshift( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (scalar k)', function test( t ) {
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
			circshift( x, 2, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ndarray k)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'int32'
	};
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
			circshift( x, scalar2ndarray( 2, opts ), value );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
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
			circshift( x, 2, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (ndarray k)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'int32'
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
			circshift( x, scalar2ndarray( 2, opts ), {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ -10 ],
		[ 0, 20 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( x, 2, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (ndarray k)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'int32'
	};
	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ -10 ],
		[ 0, 20 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( x, scalar2ndarray( 2, opts ), {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( x, 2, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (ndarray k)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'int32'
	};
	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( x, scalar2ndarray( 2, opts ), {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 0, 1, 0 ],
		[ 1, 0, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( x, 2, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (ndarray k)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'int32'
	};
	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 0, 1, 0 ],
		[ 1, 0, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			circshift( x, scalar2ndarray( 2, opts ), {
				'dims': value
			});
		};
	}
});

tape( 'the function circularly shifts elements in an input ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 1 );
	expected = [ 4.0, 1.0, 2.0, 3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function circularly shifts elements in an input ndarray (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, 1 );
	expected = [ 4.0, 1.0, 2.0, 3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function circularly shifts elements in an input ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 1, {
		'dims': [ 0, 1 ]
	});
	expected = [ 4.0, 1.0, 2.0, 3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function circularly shifts elements in an input ndarray (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, 1, {
		'dims': [ 0, 1 ]
	});
	expected = [ 4.0, 1.0, 2.0, 3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function circularly shifts elements in an input ndarray (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 2, {
		'dims': []
	});
	expected = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function circularly shifts elements in an input ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, 2, {
		'dims': []
	});
	expected = [ [ 1.0, 3.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 1, {
		'dims': [ 0 ]
	});
	expected = [ [ 3.0, 4.0 ], [ 1.0, 2.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 1, {
		'dims': [ 1 ]
	});
	expected = [ [ 2.0, 1.0 ], [ 4.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, 1, {
		'dims': [ 0 ]
	});
	expected = [ [ 2.0, 4.0 ], [ 1.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, 1, {
		'dims': [ 1 ]
	});
	expected = [ [ 3.0, 1.0 ], [ 4.0, 2.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `k` argument (scalar)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 2 );
	expected = [ 3.0, 4.0, 1.0, 2.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, -1 );
	expected = [ 2.0, 3.0, 4.0, 1.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `k` argument (scalar, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 2, {} );
	expected = [ 3.0, 4.0, 1.0, 2.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 0, {} );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `k` argument (0d ndarray)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'int32'
	};
	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, scalar2ndarray( 2, opts ) );
	expected = [ 3.0, 4.0, 1.0, 2.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, scalar2ndarray( -1, opts ) );
	expected = [ 2.0, 3.0, 4.0, 1.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, scalar2ndarray( 0, opts ) );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `k` argument (0d ndarray, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'int32'
	};
	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, scalar2ndarray( 2, opts ), {} );
	expected = [ 3.0, 4.0, 1.0, 2.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, scalar2ndarray( -1, opts ), {} );
	expected = [ 2.0, 3.0, 4.0, 1.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, scalar2ndarray( 0, opts ), {} );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `k` argument (scalar, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, 1, {
		'dims': [ 0 ]
	});
	expected = [ [ 3.0, 4.0 ], [ 1.0, 2.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, -1, {
		'dims': [ 0 ]
	});
	expected = [ [ 2.0, 4.0 ], [ 1.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, 0, {
		'dims': [ 0 ]
	});
	expected = [ [ 1.0, 3.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `k` argument (0d ndarray, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'int32'
	};
	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = circshift( x, scalar2ndarray( 1, opts ), {
		'dims': [ 0 ]
	});
	expected = [ [ 3.0, 4.0 ], [ 1.0, 2.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, scalar2ndarray( -1, opts ), {
		'dims': [ 0 ]
	});
	expected = [ [ 2.0, 4.0 ], [ 1.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = circshift( x, scalar2ndarray( 0, opts ), {
		'dims': [ 0 ]
	});
	expected = [ [ 1.0, 3.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `k` argument (ndarray)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var kbuf;
	var opts;
	var x;
	var k;

	opts = {
		'dtype': 'int32'
	};
	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	kbuf = new Int32Array( [ 1, -1 ] );
	k = new ndarray( opts.dtype, kbuf, [ 2 ], [ 1 ], 0, 'row-major' );
	actual = circshift( x, k, {
		'dims': [ 0 ]
	});
	expected = [ [ 3.0, 4.0 ], [ 1.0, 2.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	kbuf = new Int32Array( [ 0, 1 ] );
	k = new ndarray( opts.dtype, kbuf, [ 2 ], [ 1 ], 0, 'row-major' );
	actual = circshift( x, k, {
		'dims': [ 1 ]
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 6.0, 4.0, 5.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function circularly shifts elements in a 1d ndarray', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );

	actual = circshift( x, 2 );
	expected = [ 4.0, 5.0, 1.0, 2.0, 3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );

	actual = circshift( x, -2 );
	expected = [ 3.0, 4.0, 5.0, 1.0, 2.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports large shift values (|k| > N)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );

	// k=7 with N=5 is equivalent to k=2
	actual = circshift( x, 7 );
	expected = [ 4.0, 5.0, 1.0, 2.0, 3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );

	// k=-8 with N=5 is equivalent to k=2 (since -8%5=-3, -3+5=2)
	actual = circshift( x, -8 );
	expected = [ 4.0, 5.0, 1.0, 2.0, 3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});
