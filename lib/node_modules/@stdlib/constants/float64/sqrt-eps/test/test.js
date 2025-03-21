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
var pow = require( '@stdlib/math/base/special/pow' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var FLOAT64_SQRT_EPSILON = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT64_SQRT_EPSILON, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the square root of the difference between one and the smallest value greater than one which is representable as a double (2**-52)', function test( t ) {
	var expected = sqrt( pow( 2, -52 ) );
	t.equal( FLOAT64_SQRT_EPSILON, expected, 'equals sqrt(2**-52)' );
	t.end();
});
