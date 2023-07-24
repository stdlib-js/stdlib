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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var quantile = factory( 0.0 );
	t.equal( typeof quantile, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 0.0 );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN );
	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function returns `NaN` for `p` outside the interval `[0,1]`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 2.0 );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function returns `mu` for `p` on the interval `[0,1]`', function test( t ) {
	var quantile;
	var mu;
	var y;

	mu = 2.0;
	quantile = factory( mu );

	y = quantile( 0.3 );
	t.equal( y, mu, 'returns `mu`' );

	y = quantile( 0.1 );
	t.equal( y, mu, 'returns `mu`' );

	t.end();
});
