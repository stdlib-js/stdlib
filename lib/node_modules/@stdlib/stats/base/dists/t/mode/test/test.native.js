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

tape( 'if provided `NaN` for the parameter, the function returns `NaN`', opts, function test( t ) {
	var y = mode( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a negative value for `v`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mode( -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( -0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the mode for a Student\'s t-distribution', opts, function test( t ) {
	var expected;
	var v;
	var y;
	var i;

	for ( i = 0; i < data.v.length; i++ ) {
		v = data.v[ i ];
		expected = data.expected[ i ];
		y = mode( v );
		t.equal( y, expected, 'v: ' + v + ', y: ' + y + ', expected: ' + expected );
	}
	t.end();
});
