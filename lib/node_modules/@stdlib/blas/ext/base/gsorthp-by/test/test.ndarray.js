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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gsorthpBy = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gsorthpBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gsorthpBy.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function sorts a strided array', function test( t ) {
	var expected;
	var x;

	x = [ 10.0, -1.0, 3.0, 50.0, 10.0, -4.0, 8.0 ];
	expected = [ 50.0, 10.0, 10.0, 8.0, 3.0, -1.0, -4.0 ];

	gsorthpBy( 7, x, 1, 0, clbk1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 10.0, -1.0, 3.0, 50.0, 10.0, -4.0, 8.0 ];
	expected = [ -4.0, -1.0, 3.0, 8.0, 10.0, 10.0, 50.0 ];

	gsorthpBy( 7, x, 1, 0, clbk2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();

	function clbk1( a, b ) {
		if ( a > b ) {
			return -1;
		}
		if ( a < b ) {
			return 1;
		}
		return 0;
	}

	function clbk2( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function sorts a strided array (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 10.0, -1.0, 3.0, 50.0, 10.0, -4.0, 8.0 ];
	expected = [ 50.0, 10.0, 10.0, 8.0, 3.0, -1.0, -4.0 ];

	gsorthpBy( 7, toAccessorArray( x ), 1, 0, clbk1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 10.0, -1.0, 3.0, 50.0, 10.0, -4.0, 8.0 ];
	expected = [ -4.0, -1.0, 3.0, 8.0, 10.0, 10.0, 50.0 ];

	gsorthpBy( 7, toAccessorArray( x ), 1, 0, clbk2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();

	function clbk1( a, b ) {
		if ( a > b ) {
			return -1;
		}
		if ( a < b ) {
			return 1;
		}
		return 0;
	}

	function clbk2( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = gsorthpBy( x.length, x, 1, 0, clbk );

	t.strictEqual( out, x, 'same reference' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function returns a reference to the input array (accessors)', function test( t ) {
	var out;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = gsorthpBy( x.length, x, 1, 0, clbk );

	t.strictEqual( out, x, 'same reference' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gsorthpBy( 0, x, 1, 0, clbk );
	t.deepEqual( x, expected, 'returns expected value' );

	gsorthpBy( -4, x, 1, 0, clbk );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	];
	expected = [
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	];

	gsorthpBy( 3, x, 2, 1, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	expected = [ 1.0, -4.0, -2.0, 3.0, 5.0 ];

	gsorthpBy( 4, x, 1, 1, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying an offset (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	expected = [ 1.0, -4.0, -2.0, 3.0, 5.0 ];

	gsorthpBy( 4, toAccessorArray( x ), 1, 1, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying an offset (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	];
	expected = [
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	];

	gsorthpBy( 3, toAccessorArray( x ), 2, 1, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	];

	gsorthpBy( 3, x, 2, 0, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	];

	gsorthpBy( 3, toAccessorArray( x ), 2, 0, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	];

	gsorthpBy( 3, x, -2, 4, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	];

	gsorthpBy( 3, toAccessorArray( x ), -2, 4, clbk );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();

	function clbk( a, b ) {
		if ( a < b ) {
			return -1;
		}
		if ( a > b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var expected;
	var ctx;
	var x;

	ctx = {
		'count': 0
	};
	x = [ 10.0, -1.0, 3.0, 50.0 ];
	expected = [ 50.0, 10.0, 3.0, -1.0 ];

	gsorthpBy( 4, x, 1, 0, clbk, ctx );
	t.deepEqual( x, expected, 'returns expected value' );
	t.strictEqual( ctx.count > 0, true, 'context was used' );
	t.end();

	function clbk( a, b ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		if ( a > b ) {
			return -1;
		}
		if ( a < b ) {
			return 1;
		}
		return 0;
	}
});

tape( 'the function supports providing a callback execution context (accessors)', function test( t ) {
	var expected;
	var ctx;
	var x;

	ctx = {
		'count': 0
	};
	x = [ 10.0, -1.0, 3.0, 50.0 ];
	expected = [ 50.0, 10.0, 3.0, -1.0 ];

	gsorthpBy( 4, toAccessorArray( x ), 1, 0, clbk, ctx );
	t.deepEqual( x, expected, 'returns expected value' );
	t.strictEqual( ctx.count > 0, true, 'context was used' );
	t.end();

	function clbk( a, b ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		if ( a > b ) {
			return -1;
		}
		if ( a < b ) {
			return 1;
		}
		return 0;
	}
});
