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

var tape = require( 'tape' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var FLOAT32_SQRT3 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_SQRT3, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is a single-precision floating-point number equal to the square root of 3', function test( t ) {
	t.equal( FLOAT32_SQRT3, float64ToFloat32( sqrtf( 3 ) ), 'equals sqrtf(3)' );
	t.end();
});
