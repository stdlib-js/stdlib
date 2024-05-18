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
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var FLOAT32_PHI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT32_PHI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 1.6180340051651', function test( t ) {
	t.equal( FLOAT32_PHI, float64ToFloat32( 1.618033988749895 ), 'equals 1.6180340051651' );
	t.end();
});

tape( 'the exported value equals ( 1 + sqrtf( 5 ) ) / 2', function test( t ) {
	t.equal( FLOAT32_PHI, float64ToFloat32( float64ToFloat32( 1.0 + sqrtf( 5.0 ) ) / 2.0 ), 'equals ( 1 + sqrtf( 5 ) ) / 2' );
	t.end();
});
