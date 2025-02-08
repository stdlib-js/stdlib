/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var MAX_FLOAT64 = require( '@stdlib/constants/float64/max' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants/float64/smallest-subnormal' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isfinite = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isfinite instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isfinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a finite number', opts, function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		-2.0e64,
		MAX_FLOAT64,
		SMALLEST_SUBNORMAL
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isfinite( values[i] ), true, 'returns true when provided '+values[i] );
	}
	for ( i = -100; i < 101; i++ ) {
		t.equal( isfinite( i ), true, 'returns true when provided '+i );
	}
	t.end();
});

tape( 'the function returns `false` if provided `+infinity`', opts, function test( t ) {
	t.equal( isfinite( PINF ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided `-infinity`', opts, function test( t ) {
	t.equal( isfinite( NINF ), false, 'returns false' );
	t.end();
});
