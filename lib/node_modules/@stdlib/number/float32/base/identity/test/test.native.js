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
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var identityf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( identityf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof identityf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the identity function when provided a finite number', opts, function test( t ) {
	t.equal( identityf( -2.0 ), -2.0, 'returns expected value' );
	t.equal( identityf( 3.0 ), 3.0, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the identity function when provided +-zero', opts, function test( t ) {
	t.equal( isNegativeZerof( identityf( -0.0 ) ), true, 'returns expected value' );
	t.equal( isPositiveZerof( identityf( 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the identity function when provided +-infinity', opts, function test( t ) {
	t.equal( identityf( PINF ), PINF, 'returns expected value' );
	t.equal( identityf( NINF ), NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = identityf( NaN );
	t.equal( isnanf( v ), true, 'returns NaN' );
	t.end();
});
