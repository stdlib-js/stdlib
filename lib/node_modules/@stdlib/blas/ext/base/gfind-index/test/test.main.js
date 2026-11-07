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
var Float64Array = require( '@stdlib/array/float64' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gfindIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfindIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gfindIndex.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function returns the index of the first element which passes a test implemented by a predicate function', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 3.0, 2.0, 3.0 ];

	actual = gfindIndex( x.length, x, 1, clbk );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns the index of the first element which passes a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 3.0, 2.0, 3.0 ] );

	actual = gfindIndex( x.length, x, 1, clbk );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 2.0, 3.0 ];

	actual = gfindIndex( 0, x, 1, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfindIndex( -1, x, 1, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero (accessors)', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 2.0, 3.0 ];

	actual = gfindIndex( 0, toAccessorArray( x ), 1, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfindIndex( -1, toAccessorArray( x ), 1, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if unable to find an element which passes a test implemented by a predicate function', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ];

	actual = gfindIndex( x.length, x, 1, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if unable to find an element which passes a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ] );

	actual = gfindIndex( x.length, x, 1, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		3.0,
		2.0, // 1
		7.0,
		5.0  // 2
	];

	actual = gfindIndex( 3, x, 2, clbk );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		3.0,
		2.0, // 1
		7.0,
		5.0  // 2
	];

	actual = gfindIndex( 3, toAccessorArray( x ), 2, clbk );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports a negative `x` stride', function test( t ) {
	var actual;
	var x;

	x = [
		2.0, // 2
		3.0,
		5.0, // 1
		7.0,
		1.0  // 0
	];

	actual = gfindIndex( 3, x, -2, clbk );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports a negative `x` stride (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		2.0, // 2
		3.0,
		5.0, // 1
		7.0,
		1.0  // 0
	];

	actual = gfindIndex( 3, toAccessorArray( x ), -2, clbk );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports view offsets', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Float64Array( [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	actual = gfindIndex( 3, x1, 2, clbk );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var actual;
	var ctx;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ctx = {
		'count': 0
	};

	actual = gfindIndex( x.length, x, 1, clbk, ctx );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );
	t.end();

	function clbk( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports providing a callback execution context (accessors)', function test( t ) {
	var actual;
	var ctx;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ctx = {
		'count': 0
	};

	actual = gfindIndex( x.length, toAccessorArray( x ), 1, clbk, ctx );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );
	t.end();

	function clbk( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v % 2.0 === 0.0;
	}
});
