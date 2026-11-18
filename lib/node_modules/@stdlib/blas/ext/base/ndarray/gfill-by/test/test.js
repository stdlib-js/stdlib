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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var gfillBy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Collection} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'generic', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfillBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills a one-dimensional ndarray', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0, 6.0 ];
	x = vector( xbuf, 6, 1, 0 );
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 6, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [
		4.0,  // 0
		2.0,
		-3.0, // 1
		5.0,
		-1.0, // 2
		6.0
	];
	x = vector( xbuf, 3, 2, 0 );
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 3, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [
		5.0,  // 0
		2.0,
		5.0,  // 1
		5.0,
		5.0,  // 2
		6.0
	];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [
		4.0,  // 2
		2.0,
		-3.0, // 1
		5.0,
		-1.0, // 0
		6.0
	];
	x = vector( xbuf, 3, -2, 4 );
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 3, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [
		5.0,  // 2
		2.0,
		5.0,  // 1
		5.0,
		5.0,  // 0
		6.0
	];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [
		4.0,
		2.0,  // 0
		-3.0,
		5.0,  // 1
		-1.0,
		6.0   // 2
	];
	x = vector( xbuf, 3, 2, 1 );
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 3, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [
		4.0,
		5.0,  // 0
		-3.0,
		5.0,  // 1
		-1.0,
		5.0   // 2
	];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports a nonnegative starting index', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = vector( xbuf, 4, 1, 0 );
	start = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 1.0, 5.0, 5.0, 5.0 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports a negative starting index', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = vector( xbuf, 4, 1, 0 );
	start = scalar2ndarray( -3, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 1.0, 5.0, 5.0, 5.0 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports a nonnegative ending index', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = vector( xbuf, 4, 1, 0 );
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 3, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 5.0, 5.0, 5.0, 4.0 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports a negative ending index', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = vector( xbuf, 4, 1, 0 );
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( -1, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 5.0, 5.0, 5.0, 4.0 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function clamps out-of-bounds starting and ending indices', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = vector( xbuf, 4, 1, 0 );
	start = scalar2ndarray( -10, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 10, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 5.0, 5.0, 5.0, 5.0 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'if a resolved starting index is greater than or equal to a resolved ending index, the function returns the input ndarray unchanged', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	x = vector( xbuf, 4, 1, 0 );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	start = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	start = scalar2ndarray( 3, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	start = scalar2ndarray( 5, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});
	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( -10, {
		'dtype': 'generic'
	});
	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [];
	x = vector( xbuf, 0, 1, 0 );
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports specifying a fill range for an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = [ 1.0, -2.0, 3.0, 4.0 ];
	x = vector( xbuf, 2, 2, 0 );
	start = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = gfillBy( [ x, start, end ], fill );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 1.0, -2.0, 5.0, 4.0 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();

	function fill() {
		return 5.0;
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var start;
	var xbuf;
	var end;
	var ctx;
	var arr;

	xbuf = [
		1.0,  // 0
		2.0,
		3.0,  // 1
		-2.0,
		-7.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];
	ctx = {
		'count': 0
	};

	indices = [];
	values = [];
	arrays = [];

	arr = vector( xbuf, 4, 2, 0 );
	start = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});
	actual = gfillBy( [ arr, start, end ], fill, ctx );

	t.strictEqual( actual, arr, 'returns expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );

	expected = [
		3.0,
		-7.0,
		4.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		1,
		2,
		3
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		arr,
		arr,
		arr
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function fill( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return 5.0;
	}
});
