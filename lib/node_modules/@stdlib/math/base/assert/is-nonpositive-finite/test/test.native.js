/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isNonPositiveFinite = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isNonPositiveFinite instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNonPositiveFinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a nonpositive finite number', opts, function test( t ) {
	var values;
	var i;

	values = [
		-5,
		-3.14,
		-0.0,
		-1.4324
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isNonPositiveFinite( values[ i ] ), true, 'returns true when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a nonpositive finite number', opts, function test( t ) {
	var values;
	var i;

	values = [
		5.0,
		3.14,
		PINF,
		NINF
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isNonPositiveFinite( values[ i ] ), false, 'returns false when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', opts, function test( t ) {
	t.equal( isNonPositiveFinite( NaN ), false, 'returns false' );
	t.end();
});
