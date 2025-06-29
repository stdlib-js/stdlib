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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var mode = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mode instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mode, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `c`, the function returns `NaN`', opts, function test( t ) {
	var v = mode( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a nonpositive `c`, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = mode( 0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the mode of a Bradford distribution', opts, function test( t ) {
	var v;

	v = mode( 0.1 );
	t.equal( v, 0.0, 'returns 0.0' );

	v = mode( 0.5 );
	t.equal( v, 0.0, 'returns 0.0' );

	v = mode( 1.0 );
	t.equal( v, 0.0, 'returns 0.0' );

	v = mode( 10.0 );
	t.equal( v, 0.0, 'returns 0.0' );

	v = mode( 100.0 );
	t.equal( v, 0.0, 'returns 0.0' );

	v = mode( PINF );
	t.equal( v, 0.0, 'returns 0.0' );

	t.end();
});
