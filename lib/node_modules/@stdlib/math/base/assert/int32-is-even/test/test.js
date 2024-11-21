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
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var floor = require( '@stdlib/math/base/special/floor' );
var MAX_INT32 = require( '@stdlib/constants/int32/max' );
var isEven = require( './../lib' );


// VARIABLES //

var HALF_MAX_INT32 = floor( MAX_INT32 / 2 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEven, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided `0`', function test( t ) {
	var bool = isEven( 0 );
	t.strictEqual( bool, true, 'returns true when provided 0' );
	t.end();
});

tape( 'the function returns `true` if provided an even integer', function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = round( randu()*MAX_INT32 ) - HALF_MAX_INT32 - 1;
		x *= 2; // always even
		bool = isEven( x );
		t.strictEqual( bool, true, 'returns true when provided '+x );
	}
	t.end();
});

tape( 'the function returns `false` if provided an odd integer', function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = round( randu()*2*MAX_INT32 ) - MAX_INT32;
		if ( x > 0 ) {
			x -= 1;
		}
		if ( x%2 === 0 ) {
			x += 1;
		}
		bool = isEven( x );
		t.strictEqual( bool, false, 'returns false when provided '+x );
	}
	t.end();
});
