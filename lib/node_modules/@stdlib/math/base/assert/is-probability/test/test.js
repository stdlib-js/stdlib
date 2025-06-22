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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var randu = require( '@stdlib/random/base/randu' );
var isProbability = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isProbability, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided a number less than `0.0`', function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = -1.0 - ( randu() * 1000.0 );
		bool = isProbability( x );
		t.equal( bool, false, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `false` if provided a number greater than `1.0`', function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = ( randu() * 1000.0 ) + 2.0;
		bool = isProbability( x );
		t.equal( bool, false, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `true` if provided a probability', function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = randu();
		bool = isProbability( x );
		t.equal( bool, true, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `true` if provided `+-0`', function test( t ) {
	t.equal( isProbability( 0.0 ), true, 'returns expected value' );
	t.equal( isProbability( -0.0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided `1`', function test( t ) {
	t.equal( isProbability( 1.0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `+infinity`', function test( t ) {
	t.equal( isProbability( PINF ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `-infinity`', function test( t ) {
	t.equal( isProbability( NINF ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', function test( t ) {
	t.equal( isProbability( NaN ), false, 'returns expected value' );
	t.equal( isProbability( 0.0 / 0.0 ), false, 'returns expected value' );
	t.end();
});
