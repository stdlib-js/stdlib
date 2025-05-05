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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var add = require( '@stdlib/number/float64/base/add' );
var mapBy2 = require( './../lib' );

function accessor( values, i ) {
	if ( (i%3) === 0 ) {
		// Simulate a "missing" value...
		return;
	}
	return values;
}

var x = filledarrayBy( 10, 'generic', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( 10, 'generic', discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarray( null, 10, 'generic' );
console.log( z );

mapBy2.ndarray( x.length, x, 1, 0, y, -1, y.length-1, z, 1, 0, add, accessor );
console.log( z );
