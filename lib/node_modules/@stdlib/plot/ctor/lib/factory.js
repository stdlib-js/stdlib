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

// MODULES //

var isObject = require( '@stdlib/assert/is-plain-object' );
var copy = require( '@stdlib/utils/copy' );
var Plot = require( './main.js' );


// MAIN //

/**
* Returns a reusable function for generating plots.
*
* @param {Options} [options] - factory options
* TODO
* @throws {TypeError} must provide an object
* @returns {Function} plot function
*
* @example
* var opts = {
*     'width': 600,
*     'height': 400
* };
* var plot = factory( opts );
* var h1 = plot( [[1,2,3]], [[1,0,1]] );
* var h2 = plot( [[4,5,6]], [[0,1,0]] );
*/
function factory( options ) {
	var opts;
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. `options` argument must be a plain object. Value: `' + options + '`' );
		}
		opts = copy( options );
	} else {
		opts = {};
	}
	return plot;

	/**
	* Creates a plot.
	*
	* @private
	* @param {Array} [x] - x-values
	* @param {Array} [y] - y-values
	* @throws {TypeError} must provide valid options
	* @returns {Plot} plot instance
	*/
	function plot( x, y ) {
		if ( arguments.length === 2 ) {
			return new Plot( x, y, opts );
		}
		return new Plot( opts );
	}
}


// EXPORTS //

module.exports = factory;
