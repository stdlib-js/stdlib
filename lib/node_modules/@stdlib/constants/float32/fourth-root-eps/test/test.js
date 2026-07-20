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

var tape = require( 'tape' );
var pow = require( '@stdlib/math/base/special/pow' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var FLOAT32_FOURTH_ROOT_EPS = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_FOURTH_ROOT_EPS, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the fourth root of the difference between one and the smallest value greater than one which is representable as a float (2**-23)', function test( t ) {
	var expected = sqrtf( sqrtf( float64ToFloat32( pow( 2, -23 ) ) ) );
	t.strictEqual( FLOAT32_FOURTH_ROOT_EPS, expected, 'returns expected value' );
	t.end();
});
