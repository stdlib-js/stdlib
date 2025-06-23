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

var randu = require( '@stdlib/random/base/randu' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var modff = require( './../lib' );

var parts;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = f32( ( randu()*1000.0 ) - 500.0 );
	parts = modff( x );
	console.log( 'modff(%d) => integral: %d. fraction: %d.', x, parts[ 0 ], parts[ 1 ] );
}
