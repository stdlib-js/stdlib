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

var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var MAX_INT = require( '@stdlib/constants/uint32/max' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var float32ToUint32 = require( './../lib' );

var uint32;
var half;
var f32;
var i;

half = ( MAX_INT-1 ) / 2;
for ( i = 0; i < 500; i++ ) {
	// Generate a random single-precision floating-point integer:
	f32 = float64ToFloat32( round( randu()*MAX_INT ) - half );

	// Convert the single-precision floating-point value to an unsigned 32-bit integer:
	uint32 = float32ToUint32( f32 );

	console.log( 'float32: %d => uint32: %d', f32, uint32 );
}
