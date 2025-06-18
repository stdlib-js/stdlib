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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// VARIABLES //

var quantile = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( quantile instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = quantile( NaN, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( NaN, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a number outside the interval `[0,1]` for `p`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = quantile( 1.1, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( -0.1, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a number on the interval `[0,1]` for `p`, the function returns `mu`', opts, function test( t ) {
	var mu;
	var y;

	mu = 2.0;

	y = quantile( 0.3, mu );
	t.equal( y, mu, 'returns `mu`' );

	y = quantile( 0.8, mu );
	t.equal( y, mu, 'returns `mu`' );

	t.end();
});
