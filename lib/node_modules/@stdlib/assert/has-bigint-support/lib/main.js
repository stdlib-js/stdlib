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

var getGlobal = require( '@stdlib/utils/global' );


// VARIABLES //

var Global = getGlobal();


// MAIN //

/**
* Tests for native `BigInt` support.
*
* @returns {boolean} boolean indicating if an environment has `BigInt` support
*
* @example
* var bool = hasBigIntSupport();
* // returns <boolean>
*/
function hasBigIntSupport() {
	return (
		typeof Global.BigInt === 'function' &&
		typeof BigInt === 'function' && // eslint-disable-line stdlib/require-globals
		typeof Global.BigInt( '1' ) === 'bigint' &&
		typeof BigInt( '1' ) === 'bigint' // eslint-disable-line stdlib/require-globals, no-undef
	);
}


// EXPORTS //

module.exports = hasBigIntSupport;
