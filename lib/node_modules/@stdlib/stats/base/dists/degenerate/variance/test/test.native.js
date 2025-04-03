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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// VARIABLES //

var variance = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( variance instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof variance, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `mu`, the function returns `NaN`', opts, function test( t ) {
	var v = variance( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns the variance of a degenerate distribution', opts, function test( t ) {
	var v = variance( 2.0 );
	t.equal( v, 0.0, 'returns 0.0' );

	v = variance( -5.0 );
	t.equal( v, 0.0, 'returns 0.0' );

	v = variance( 0.5 );
	t.equal( v, 0.0, 'returns 0.0' );
	t.end();
});
