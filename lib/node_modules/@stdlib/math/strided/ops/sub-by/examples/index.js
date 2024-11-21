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
var subBy = require( './../lib' );

function accessor( values, i ) {
	if ( (i%3) === 0 ) {
		// Simulate a "missing" value...
		return;
	}
	return values;
}

var x = filledarrayBy( 10, 'generic', uniform( -10.0, 10.0 ) );
console.log( x );

var y = filledarrayBy( x.length, 'generic', uniform( -10.0, 10.0 ) );
console.log( y );

var z = filledarray( null, x.length, 'generic' );
console.log( z );

subBy.ndarray( x.length, x, 1, 0, y, -1, y.length-1, z, 1, 0, accessor );
console.log( z );
