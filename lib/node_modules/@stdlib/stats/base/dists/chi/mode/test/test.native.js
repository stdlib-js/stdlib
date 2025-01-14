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
var NINF = require( '@stdlib/constants/float64/ninf' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


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

tape( 'if provided `NaN` for `k`, the function returns `NaN`', opts, function test( t ) {
	var v = mode( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a degrees of freedom parameter `k` that is smaller than one, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = mode( 0.8 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( 0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the mode of a chi distribution', opts, function test( t ) {
	var expected;
	var k;
	var i;
	var y;

	expected = data.expected;
	k = data.k;
	for ( i = 0; i < expected.length; i++ ) {
		y = mode( k[i] );
		t.equal( y, expected[i], 'k: '+k[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
