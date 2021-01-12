/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var uniform = require( '@stdlib/random/base/uniform' );
var filledarray = require( '@stdlib/array/filled' );
var avercosBy = require( './../lib' );

function accessor( v, i ) {
	if ( (i%3) === 0 ) {
		// Simulate a "missing" value...
		return;
	}
	return v;
}

var x = filledarray( 0.0, 10, 'generic' );
var y = filledarray( null, 10, 'generic' );

var i;
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = uniform( -2.0, 0.0 );
}
console.log( x );
console.log( y );

avercosBy.ndarray( x.length, x, 1, 0, y, -1, y.length-1, accessor );
console.log( y );
