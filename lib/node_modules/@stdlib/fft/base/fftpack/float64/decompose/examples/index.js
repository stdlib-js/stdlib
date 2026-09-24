/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var decompose = require( './../lib' );

var initial = new Float64Array( [ 3.0, 4.0, 2.0, 5.0 ] ); // as found in FFTPACK
var factors = new Float64Array( 4 );

var nf = decompose( 12, 4, initial, 1, 0, factors, 1, 0 );

console.log( 'Sequence length: %d', 12 );
console.log( 'Number of factors: %d', nf );

console.log( 'Factors:' );
var j;
for ( j = 0; j < nf; j++ ) {
	console.log( '  %d', factors[ j+2 ] );
}
