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
	var cdf = factory( 0.0 );
	t.equal( typeof cdf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 3.0 );
	y = cdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	cdf = factory( NaN );
	y = cdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function returns `1.0` if provided a value greater or equal to `mu`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 3.0 );

	y = cdf( 3.0 );
	t.equal( y, 1.0, 'returns 1.0' );

	y = cdf( 4.0 );
	t.equal( y, 1.0, 'returns 1.0' );

	t.end();
});

tape( 'the created function returns `0.0` if provided a value smaller than `mu`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 3.0 );

	y = cdf( 2.9 );
	t.equal( y, 0.0, 'returns 0.0' );

	y = cdf( -2.0 );
	t.equal( y, 0.0, 'returns 0.0' );

	t.end();
});
