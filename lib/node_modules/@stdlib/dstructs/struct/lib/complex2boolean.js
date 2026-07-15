/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var Boolean = require( '@stdlib/boolean/ctor' );


// MAIN //

/**
* Converts a complex number to a boolean.
*
* @private
* @param {ComplexLike} value - input value
* @returns {boolean} result
*/
function complex2boolean( value ) {
	return Boolean( value.re || value.im );
}


// EXPORTS //

module.exports = complex2boolean;
