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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var PMF = require( './pmf.js' );


// MAIN //

/**
* Returns the probability mass function (PMF) corresponding to a provided distribution name.
*
* @private
* @param {string} name - distribution name
* @returns {(Function|Error)} a probability mass function (PMF) or an error
*/
function getPMF( name ) {
	if ( !hasOwnProp( PMF, name ) ) {
		return new Error( 'invalid argument. Unsupported/unrecognized distribution name. Value: `' + name + '`.' );
	}
	return PMF[ name ];
}


// EXPORTS //

module.exports = getPMF;
