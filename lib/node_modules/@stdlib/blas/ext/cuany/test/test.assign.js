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
var isSameArray = require( '@stdlib/assert/is-same-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var emptyLike = require( '@stdlib/ndarray/empty-like' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var cuany = require( './../lib' ).assign;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cuany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
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
			cuany( value, out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
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
			cuany( value, out, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cuany( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object (options)', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cuany( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an object', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [ 2, 2 ], {
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
			cuany( x, out, value );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [ 2, 2 ], {
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
			cuany( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ -10 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cuany( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [ 2, 2 ], {
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
			cuany( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [ 2, 2 ], {
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
			cuany( x, out, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (default)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, {
				'dtype': 'generic'
			});
			cuany( x, out );
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (all dimensions)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[],
		[ 2, 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, {
				'dtype': 'generic'
			});
			cuany( x, out, {
				'dims': [ 0, 1 ]
			});
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (some dimensions)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[],
		[ 2, 2, 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, {
				'dtype': 'generic'
			});
			cuany( x, out, {
				'dims': [ 0 ]
			});
		};
	}
});

tape( 'the function cumulatively tests whether at least one element in an ndarray is truthy (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cuany( x, out );
	expected = [ false, false, true, true ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in an ndarray is truthy (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cuany( x, out );
	expected = [ false, false, true, true ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in an ndarray is truthy (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': [ 0, 1 ]
	});
	expected = [ false, false, true, true ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in an ndarray is truthy (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': [ 0, 1 ]
	});
	expected = [ false, false, true, true ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in an ndarray is truthy (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': []
	});
	expected = [ [ false, false ], [ true, false ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in an ndarray is truthy (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': []
	});
	expected = [ [ false, true ], [ false, false ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': [ 0 ]
	});
	expected = [ [ false, false ], [ true, false ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': [ 1 ]
	});
	expected = [ [ false, false ], [ true, true ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': [ 0 ]
	});
	expected = [ [ false, true ], [ false, true ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 0.0, 0.0, 1.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x );

	actual = cuany( x, out, {
		'dims': [ 1 ]
	});
	expected = [ [ false, true ], [ false, false ] ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
