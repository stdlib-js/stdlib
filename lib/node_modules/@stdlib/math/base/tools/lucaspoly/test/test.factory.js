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
var lucas = require( '@stdlib/math/base/special/lucas' );
var negaLucas = require( '@stdlib/math/base/special/negalucas' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function for evaluating a Lucas polynomial', function test( t ) {
	var polyval = factory( 5 );
	t.strictEqual( typeof polyval, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which evaluates a Lucas polynomial', function test( t ) {
	var expected;
	var polyval;
	var v;
	var x;
	var i;

	expected = [
		2.0,
		2.0,
		6.0,
		14.0,
		34.0,
		82.0,
		198.0
	];

	x = 2.0;
	for ( i = 0; i < expected.length; i++ ) {
		polyval = factory( i );
		v = polyval( x );
		t.strictEqual( v, expected[ i ], 'returns expected value for L_'+i+'('+x+')' );
	}
	t.end();
});

tape( 'the function returns a function which evaluates a Lucas polynomial (x=1.0)', function test( t ) {
	var expected;
	var polyval;
	var v;
	var i;

	for ( i = 0; i < 77; i++ ) {
		expected = lucas( i );
		polyval = factory( i );
		v = polyval( 1.0 );
		t.strictEqual( v, expected, 'returns the '+i+'th Lucas number' );
	}
	t.end();
});

tape( 'the function returns a function which evaluates a negaLucas polynomial (x=1.0)', function test( t ) {
	var expected;
	var polyval;
	var v;
	var i;

	for ( i = 0; i > -77; i-- ) {
		expected = negaLucas( i );
		polyval = factory( i );
		v = polyval( 1.0 );
		t.strictEqual( v, expected, 'returns the '+(-i)+'th negaLucas number' );
	}
	t.end();
});
