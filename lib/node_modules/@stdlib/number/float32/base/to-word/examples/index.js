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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var randu = require( '@stdlib/random/base/randu' );
var toWordf = require( './../lib' );

var word;
var f64;
var f32;
var i;

// Convert single-precision floating-point numbers to integers representing the binary literal...
for ( i = 0; i < 1000; i++ ) {
	f64 = (randu()*100.0) - 50.0;
	f32 = float64ToFloat32( f64 );
	word = toWordf( f32 );
	console.log( 'float64: %d => float32: %d => word: %d', f64, f32, word );
}
