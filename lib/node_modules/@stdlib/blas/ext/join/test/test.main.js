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
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var join = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof join, 'function', 'main export is a function' );
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
			join( value );
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
			join( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a separator which is not broadcast-compatible with the first argument', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		{
			'sep': zeros( [ 4 ], opts )
		},
		{
			'sep': zeros( [ 2, 2, 2 ], opts )
		},
		{
			'sep': zeros( [ 0 ], opts )
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			join( x, value );
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
			join( x, value );
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
			join( x, {
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
			join( x, {
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
			join( x, {
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
			join( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function returns an ndarray created by joining elements of an input ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x );
	expected = '1,2,3,4';

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray created by joining elements of an input ndarray (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = join( x );
	expected = '1,2,3,4';

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 0, 1 ]
	});
	expected = '1,2,3,4';

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 0, 1 ],
		'keepdims': false
	});
	expected = '1,2,3,4';

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 0, 1 ],
		'keepdims': true
	});
	expected = [ [ '1,2,3,4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
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

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 0, 1 ]
	});
	expected = '1,2,3,4';

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 0, 1 ],
		'keepdims': false
	});
	expected = '1,2,3,4';

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 0, 1 ],
		'keepdims': true
	});
	expected = [ [ '1,2,3,4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
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

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [],
		'keepdims': false
	});
	expected = [ [ '1', '2' ], [ '3', '4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [],
		'keepdims': true
	});
	expected = [ [ '1', '2' ], [ '3', '4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [],
		'keepdims': false
	});
	expected = [ [ '1', '2' ], [ '3', '4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [],
		'keepdims': true
	});
	expected = [ [ '1', '2' ], [ '3', '4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'keepdims': false
	});
	expected = [ '1,3', '2,4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'keepdims': true
	});
	expected = [ [ '1,3', '2,4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'keepdims': false
	});
	expected = [ '1,2', '3,4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'keepdims': true
	});
	expected = [ [ '1,2' ], [ '3,4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
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

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'keepdims': false
	});
	expected = [ '1,3', '2,4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'keepdims': true
	});
	expected = [ [ '1,3', '2,4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'keepdims': false
	});
	expected = [ '1,2', '3,4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'keepdims': true
	});
	expected = [ [ '1,2' ], [ '3,4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a custom separator (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'sep': '|',
		'keepdims': false
	});
	expected = [ '1|3', '2|4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'sep': '|',
		'keepdims': true
	});
	expected = [ [ '1|3', '2|4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'sep': '|',
		'keepdims': false
	});
	expected = [ '1|2', '3|4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'sep': '|',
		'keepdims': true
	});
	expected = [ [ '1|2' ], [ '3|4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a custom separator (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'sep': '|',
		'keepdims': false
	});
	expected = [ '1|3', '2|4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 0 ],
		'sep': '|',
		'keepdims': true
	});
	expected = [ [ '1|3', '2|4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 1, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'sep': '|',
		'keepdims': false
	});
	expected = [ '1|2', '3|4' ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = join( x, {
		'dims': [ 1 ],
		'sep': '|',
		'keepdims': true
	});
	expected = [ [ '1|2' ], [ '3|4' ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 1 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
