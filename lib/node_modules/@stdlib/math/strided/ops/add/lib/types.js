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

// MODULES //

var dtypes = require( '@stdlib/strided/dtypes' );
var signatures = require( '@stdlib/strided/base/binary-dtype-signatures' );


// VARIABLES //

// Data types to exclude as inputs:
var INPUT_EXCLUDE = [
	'binary',
	'uint8c',    // FIXME: remove once we have C support for `uint8c`
	'complex64', // FIXME: remove once we have JS support for `complex64`
	'complex128' // FIXME: remove once we have JS support for `complex128`
];

// Data types to exclude as outputs:
var OUTPUT_EXCLUDE = [
	'binary',
	'uint8c',    // FIXME: remove once we have C support for `uint8c`
	'complex64', // FIXME: remove once we have JS support for `complex64`
	'complex128' // FIXME: remove once we have JS support for `complex128`
];

// Resolve a list of dtypes for which we want to create signatures:
var dt = dtypes();
var DTYPES1 = dt.filter( predicate( INPUT_EXCLUDE ) );
var DTYPES2 = DTYPES1;
var DTYPES3 = dt.filter( predicate( OUTPUT_EXCLUDE ) );


// FUNCTIONS //

/**
* Returns a predicate function for filtering an array.
*
* @private
* @param {Array} list - list of elements to remove from an input array
* @returns {Function} predicate function
*/
function predicate( list ) {
	return filter;

	/**
	* Predicate invoked for each element in an array.
	*
	* @private
	* @param {*} el - element
	* @returns {boolean} boolean indicating whether an element passes a test
	*/
	function filter( el ) {
		return ( list.indexOf( el ) === -1 );
	}
}


// MAIN //

/**
* List of dtypes defining allowed interface signatures.
*
* @private
* @name types
* @constant
* @type {Array}
*/
var types = signatures( DTYPES1, DTYPES2, DTYPES3, { // eslint-disable-line vars-on-top
	'enums': true
});


// EXPORTS //

module.exports = types;
