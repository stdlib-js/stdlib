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
var randu = require( '@stdlib/random/base/randu' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


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

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = variance( NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = variance( 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `c`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = variance( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the variance of a Lévy distribution', opts, function test( t ) {
	var mu;
	var c;
	var y;
	var i;

	for ( i = 0; i < 100; i++ ) {
		mu = ( randu()*10.0 ) - 5.0;
		c = randu() * 20.0;
		y = variance( mu, c );
		t.strictEqual( y, PINF, 'returns expected value' );
	}
	t.end();
});
