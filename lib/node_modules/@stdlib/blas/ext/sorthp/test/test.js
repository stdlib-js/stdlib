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
var isSameArray = require( '@stdlib/assert/is-same-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var sorthp = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sorthp, 'function', 'main export is a function' );
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
			sorthp( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (scalar sort order)', function test( t ) {
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
			sorthp( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (ndarray sort order)', function test( t ) {
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
			sorthp( value, scalar2ndarray( 1.0 ) );
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
			sorthp( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (scalar sort order, options)', function test( t ) {
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
			sorthp( value, 1.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (ndarray sort order, options)', function test( t ) {
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
			sorthp( value, scalar2ndarray( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type', function test( t ) {
	var values;
	var i;

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (scalar sort order)', function test( t ) {
	var values;
	var i;

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (ndarray sort order)', function test( t ) {
	var values;
	var i;

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( value, scalar2ndarray( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (scalar sort order, options)', function test( t ) {
	var values;
	var i;

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( value, 1.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (ndarray sort order, options)', function test( t ) {
	var values;
	var i;

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( value, scalar2ndarray( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided a `sortOrder` argument which is not an ndarray-like object, a numeric scalar, or a support string', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( x, value );
		};
	}
});

tape( 'the function throws an error if provided a `sortOrder` argument which is not an ndarray-like object, a numeric scalar, or a support string (options)', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sorthp( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a `sortOrder` argument which is not broadcast-compatible', function test( t ) {
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
			sorthp( x, value );
		};
	}
});

tape( 'the function throws an error if provided a `sortOrder` argument which is not broadcast-compatible (options)', function test( t ) {
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
			sorthp( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
			sorthp( x, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (scalar sort order)', function test( t ) {
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
			sorthp( x, 1.0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ndarray sort order)', function test( t ) {
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
			sorthp( x, scalar2ndarray( 1.0, opts ), value );
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
			sorthp( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (scalar sort order)', function test( t ) {
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
			sorthp( x, 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (ndarray sort order)', function test( t ) {
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
			sorthp( x, scalar2ndarray( 1.0, opts ), {
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
			sorthp( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (scalar sort order)', function test( t ) {
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
			sorthp( x, 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (ndarray sort order)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			sorthp( x, scalar2ndarray( 1.0, opts ), {
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
			sorthp( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (scalar sort order)', function test( t ) {
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
			sorthp( x, 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (ndarray sort order)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			sorthp( x, scalar2ndarray( 1.0, opts ), {
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
			sorthp( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (scalar sort order)', function test( t ) {
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
			sorthp( x, 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (ndarray sort order)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			sorthp( x, scalar2ndarray( 1.0, opts ), {
				'dims': value
			});
		};
	}
});

tape( 'the function sorts elements in an input ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function sorts elements in an input ndarray (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = sorthp( x );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function sorts elements in an input ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, {
		'dims': [ 0, 1 ]
	});
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function sorts elements in an input ndarray (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = sorthp( x, {
		'dims': [ 0, 1 ]
	});
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function sorts elements in an input ndarray (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, {
		'dims': []
	});
	expected = [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function sorts elements in an input ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = sorthp( x, {
		'dims': []
	});
	expected = [ [ -1.0, -3.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
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

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, {
		'dims': [ 0 ]
	});
	expected = [ [ -3.0, 2.0 ], [ -1.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, {
		'dims': [ 1 ]
	});
	expected = [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
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

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = sorthp( x, {
		'dims': [ 0 ]
	});
	expected = [ [ -1.0, -3.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = sorthp( x, {
		'dims': [ 1 ]
	});
	expected = [ [ -3.0, -1.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (scalar)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 1.0 );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = sorthp( x, -1.0 );
	expected = [ 4.0, 2.0, -1.0, -3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (scalar, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 1.0, {} );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = sorthp( x, -1.0, {} );
	expected = [ 4.0, 2.0, -1.0, -3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (0d ndarray)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, scalar2ndarray( 1.0, opts ) );
	expected = [-3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = sorthp( x, scalar2ndarray( -1.0, opts ) );
	expected = [ 4.0, 2.0, -1.0, -3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (0d ndarray, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, scalar2ndarray( 1.0, opts ), {} );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = sorthp( x, scalar2ndarray( -1.0, opts ), {} );
	expected = [ 4.0, 2.0, -1.0, -3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (scalar, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 1.0, {
		'dims': [ 0 ]
	});
	expected = [ [ -3.0, 2.0 ], [ -1.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = sorthp( x, -1.0, {
		'dims': [ 0 ]
	});
	expected = [ [ 2.0, 4.0 ], [ -1.0, -3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (0d ndarray, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, scalar2ndarray( 1.0, opts ), {
		'dims': [ 0 ]
	});
	expected = [ [ -3.0, 2.0 ], [ -1.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = sorthp( x, scalar2ndarray( -1.0, opts ), {
		'dims': [ 0 ]
	});
	expected = [ [ 2.0, 4.0 ], [ -1.0, -3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (string literals)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 'asc' );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 'ascending' );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 'desc' );
	expected = [ 4.0, 2.0, -1.0, -3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 'descending' );
	expected = [ 4.0, 2.0, -1.0, -3.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (string literals, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 'asc', {} );
	expected = [ -3.0, -1.0, 2.0, 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = sorthp( x, 'descending', {
		'dims': [ 0 ]
	});
	expected = [ [ -1.0, 4.0 ], [ -3.0, 2.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `sortOrder` argument (ndarray)', function test( t ) {
	var sortOrder;
	var expected;
	var actual;
	var xbuf;
	var obuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	obuf = [ 1.0, -1.0 ];
	sortOrder = new ndarray( opts.dtype, obuf, [ 2 ], [ 1 ], 0, 'row-major' );
	actual = sorthp( x, sortOrder, {
		'dims': [ 0 ]
	});
	expected = [ [ -3.0, 4.0 ], [ -1.0, 2.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	obuf = [ 1.0, -1.0 ];
	sortOrder = new ndarray( opts.dtype, obuf, [ 2 ], [ 1 ], 0, 'row-major' );
	actual = sorthp( x, sortOrder, {
		'dims': [ 0 ]
	});
	expected = [ [ -1.0, 4.0 ], [ 2.0, -3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
