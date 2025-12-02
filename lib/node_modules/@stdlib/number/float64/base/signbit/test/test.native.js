/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var signbit = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( signbit instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof signbit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean', opts, function test( t ) {
	t.strictEqual( typeof signbit( 5.0 ), 'boolean', 'returns expected value' );
	t.end();
});

tape( 'the function returns a boolean indicating if a sign bit is on (true) or off (false)', opts, function test( t ) {
	var bool;
	var sign;
	var frac;
	var exp;
	var x;
	var i;

	for ( i = 0; i < 1.0e4; i++ ) {
		if ( randu() < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		frac = randu() * 10.0;
		exp = round( randu()*646.0 ) - 323;
		x = sign * frac * pow( 10.0, exp );
		bool = signbit( x );
		if ( sign < 0.0 ) {
			t.strictEqual( bool, true, 'returns true for ' + x );
		} else {
			t.strictEqual( bool, false, 'returns false for ' + x );
		}
	}
	t.end();
});
