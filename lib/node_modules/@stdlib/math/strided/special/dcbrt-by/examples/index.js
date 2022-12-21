/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var uniform = require( '@stdlib/random/base/uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dcbrtBy = require( './../lib' );

function accessor( v, i ) {
	if ( (i%3) === 0 ) {
		// Simulate a "missing" value...
		return;
	}
	return v;
}

var x = filledarrayBy( 10, 'float64', uniform( -10.0, 10.0 ) );
console.log( x );

var out = filledarray( null, x.length, 'float64' );
console.log( out );

dcbrtBy.ndarray( x.length, x, 1, 0, out, -1, out.length-1, accessor );
console.log( out );
