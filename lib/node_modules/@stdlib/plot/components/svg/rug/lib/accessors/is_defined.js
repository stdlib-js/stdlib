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

var logger = require( 'debug' );
var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;


// VARIABLES //

var debug = logger( 'rug:accessor:is-defined' );


// MAIN //

/**
* Predicate function which returns a boolean indicating whether a datum is defined.
*
* @private
* @param {number} d - datum
* @param {integer} i - index
* @returns {boolean} boolean indicating whether a datum is defined
*/
function isDefined( d ) {
	var bool = !isnan( d );
	debug( 'Datum: %s. Defined: %s.', JSON.stringify( d ), bool );
	return bool;
}


// EXPORTS //

module.exports = isDefined;
