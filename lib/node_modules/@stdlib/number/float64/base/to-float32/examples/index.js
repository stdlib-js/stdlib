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
var float64ToFloat32 = require( './../lib' );

var f64;
var f32;
var i;

// Convert random double-precision floating-point numbers to the nearest single-precision floating-point number...
for ( i = 0; i < 1000; i++ ) {
	f64 = randu() * 100.0;
	f32 = float64ToFloat32( f64 );
	console.log( 'float64: %d => float32: %d', f64, f32 );
}
