/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var snanmskrange = require( './../lib' );

var mask;
var x;
var i;

x = new Float32Array( 10 );
mask = new Uint8Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	if ( randu() < 0.2 ) {
		mask[ i ] = 1;
	} else {
		mask[ i ] = 0;
	}
	if ( randu() < 0.1 ) {
		x[ i ] = NaN;
	} else {
		x[ i ] = round( (randu()*100.0) - 50.0 );
	}
}
console.log( x );
console.log( mask );

var v = snanmskrange( x.length, x, 1, mask, 1 );
console.log( v );
