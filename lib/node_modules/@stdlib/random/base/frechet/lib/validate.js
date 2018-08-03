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

var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/assert/is-nan' );


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 1.0, 2.0, 1.3 );
* if ( err ) {
*     throw err;
* }
*/
function validate( alpha, s, m ) {
	if ( !isPositiveNumber( alpha ) || isnan( alpha ) ) {
		return new TypeError( 'invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `'+alpha+'`.' );
	}
	if ( !isPositiveNumber( s ) || isnan( s ) ) {
		return new TypeError( 'invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `'+s+'`.' );
	}
	if ( !isNumber( m ) || isnan( m ) ) {
		return new TypeError( 'invalid argument. Third argument must be a number primitive and not `NaN`. Value: `'+m+'`.' );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
