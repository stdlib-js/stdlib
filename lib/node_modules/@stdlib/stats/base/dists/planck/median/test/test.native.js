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


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// VARIABLES //

var median = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( median instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof median, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `lambda`, the function returns `NaN`', opts, function test( t ) {
	var v = median( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = median( 0.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = median( -1.1 );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the median of a Planck distribution', opts, function test( t ) {
	var expected;
	var lambda;
	var i;
	var y;

	expected = data.expected;
	lambda = data.lambda;
	for ( i = 0; i < expected.length; i++ ) {
		y = median( lambda[ i ] );
		t.equal( y, expected[ i ], 'lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});
