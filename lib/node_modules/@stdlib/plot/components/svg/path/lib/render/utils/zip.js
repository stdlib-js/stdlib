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

/**
* Zips two arrays.
*
* @private
* @param {ArrayLike} x - x-values
* @param {ArrayLike} y - y-values
* @throws {Error} must provide equal length array-like objects
* @returns {Array<Array>} zipped array
*/
function zip( x, y ) {
	var out;
	var i;
	if ( x.length !== y.length ) {
		throw new Error( 'invalid arguments. Must provide equal length array-like objects. `x` length: '+x.length+', `y` length: '+y.length+'.' );
	}
	out = new Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		out[ i ] = [ x[i], y[i] ];
	}
	return out;
}


// EXPORTS //

module.exports = zip;
