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
var isSameValue = require( '@stdlib/assert/is-same-value' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var nanminabs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanminabs, 'function', 'main export is a function' );
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
			nanminabs( value );
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
			nanminabs( value, {} );
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
			nanminabs( value );
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
			nanminabs( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
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
			nanminabs( x, value );
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
		'foo',
		'bar',
		'beep',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanminabs( x, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `keepdims` option which is not a boolean', function test( t ) {
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
			nanminabs( x, {
				'keepdims': value
			});
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
			nanminabs( x, {
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
			nanminabs( x, {
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
			nanminabs( x, {
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
			nanminabs( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function performs a reduction on an ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x );
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x );
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [ 0, 1 ]
	});
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [ 0, 1 ],
		'keepdims': false
	});
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [ 0, 1 ],
		'keepdims': true
	});
	expected = [ [ 1.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [ 0, 1 ]
	});
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [ 0, 1 ],
		'keepdims': false
	});
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [ 0, 1 ],
		'keepdims': true
	});
	expected = [ [ 1.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [],
		'keepdims': false
	});
	expected = [ [ 1.0, 2.0 ], [ NaN, 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( isSameValue( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 0 ][ 1 ], expected[ 0 ][ 1 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 0 ], expected[ 1 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ] ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [],
		'keepdims': true
	});
	expected = [ [ 1.0, 2.0 ], [ NaN, 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( isSameValue( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 0 ][ 1 ], expected[ 0 ][ 1 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 0 ], expected[ 1 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [],
		'keepdims': false
	});
	expected = [ [ 1.0, NaN ], [ 2.0, 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( isSameValue( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 0 ][ 1 ], expected[ 0 ][ 1 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 0 ], expected[ 1 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ] ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [],
		'keepdims': true
	});
	expected = [ [ 1.0, NaN ], [ 2.0, 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( isSameValue( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 0 ][ 1 ], expected[ 0 ][ 1 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 0 ], expected[ 1 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [ 0 ],
		'keepdims': false
	});
	expected = [ 1.0, 2.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [ 0 ],
		'keepdims': true
	});
	expected = [ [ 1.0, 2.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [ 1 ],
		'keepdims': false
	});
	expected = [ 1.0, 4.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dims': [ 1 ],
		'keepdims': true
	});
	expected = [ [ 1.0 ], [ 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [ 0 ],
		'keepdims': false
	});
	expected = [ 1.0, 4.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [ 0 ],
		'keepdims': true
	});
	expected = [ [ 1.0, 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [ 1 ],
		'keepdims': false
	});
	expected = [ 1.0, 2.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dims': [ 1 ],
		'keepdims': true
	});
	expected = [ [ 1.0 ], [ 2.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
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

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = nanminabs( x, {
		'dtype': 'float64'
	});
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = nanminabs( x, {
		'dtype': 'float64'
	});
	expected = 1.0;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});
