/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var uncurryRight = require( './../lib' );


// FUNCTIONS //

function addZ( z ) {
	return function addY( y ) {
		return function addX( x ) {
			return x + y + z;
		};
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof uncurryRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			uncurryRight( value );
		};
	}
});

tape( 'the function throws an error if provided an arity argument which is not a positive integer (3 args)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0,
		-1,
		NaN,
		null,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			uncurryRight( addZ, value, {} );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var fcn = uncurryRight( addZ );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function throws an error if provided more arguments than number of possible curried function invocations', function test( t ) {
	var fcn = uncurryRight( addZ );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		fcn( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
	}
});

tape( 'if provided an arity, the function returns a function which throws an error if provided insufficient input arguments', function test( t ) {
	var fcn = uncurryRight( addZ, 3 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		fcn( 1, 2 );
	}
});

tape( 'if provided an arity, the function returns a function which throws an error if the arity and number of arguments provided is greater than number of possible curried function invocations', function test( t ) {
	var fcn = uncurryRight( addZ, 5 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		fcn( 1, 2, 3, 4, 5 );
	}
});

tape( 'the function returns a function which transforms a curried function into an uncurried form (no arity)', function test( t ) {
	var fcn;
	var out;

	fcn = uncurryRight( addZ );

	out = fcn( 'a', 'b', 'c' );
	t.strictEqual( out, 'abc', 'returns expected value' );

	out = fcn( 'd', 'e', 'f' );
	t.strictEqual( out, 'def', 'returns expected value' );

	out = fcn( -4, 5, -6 );
	t.strictEqual( out, -5, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which transforms a curried function into an uncurried form (arity)', function test( t ) {
	var fcn;
	var out;

	fcn = uncurryRight( addZ, 3 );

	out = fcn( 'a', 'b', 'c' );
	t.strictEqual( out, 'abc', 'returns expected value' );

	out = fcn( 'd', 'e', 'f' );
	t.strictEqual( out, 'def', 'returns expected value' );

	out = fcn( -4, 5, -6 );
	t.strictEqual( out, -5, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an evaluation context (no arity)', function test( t ) {
	var context;
	var fcn;
	var out;

	context = {};
	fcn = uncurryRight( addZ, context );

	out = fcn( 'a', 'b', 'c' );
	t.strictEqual( out, 'abc', 'returns expected value' );

	out = fcn( 'd', 'e', 'f' );
	t.strictEqual( out, 'def', 'returns expected value' );

	out = fcn( -4, 5, -6 );
	t.strictEqual( out, -5, 'returns expected value' );

	t.end();

	function addZ( z ) {
		this.z = z; // eslint-disable-line no-invalid-this
		return addY;
	}

	function addY( y ) {
		this.y = y; // eslint-disable-line no-invalid-this
		return addX;
	}

	function addX( x ) {
		return x + this.y + this.z; // eslint-disable-line no-invalid-this
	}
});

tape( 'the function supports providing an evaluation context (arity)', function test( t ) {
	var context;
	var fcn;
	var out;

	context = {};
	fcn = uncurryRight( addZ, 3, context );

	out = fcn( 'a', 'b', 'c' );
	t.strictEqual( out, 'abc', 'returns expected value' );

	out = fcn( 'd', 'e', 'f' );
	t.strictEqual( out, 'def', 'returns expected value' );

	out = fcn( -4, 5, -6 );
	t.strictEqual( out, -5, 'returns expected value' );

	t.end();

	function addZ( z ) {
		this.z = z; // eslint-disable-line no-invalid-this
		return addY;
	}

	function addY( y ) {
		this.y = y; // eslint-disable-line no-invalid-this
		return addX;
	}

	function addX( x ) {
		return x + this.y + this.z; // eslint-disable-line no-invalid-this
	}
});
