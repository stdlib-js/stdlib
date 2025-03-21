/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );


// MAIN //

/**
* Checks whether an environment supports Node.js buffer instances which inherit from `Uint8Array`.
*
* @private
* @returns {boolean} boolean indicating whether an environment supports Node.js buffer instances inheriting from `Uint8Array`
*
* @example
* var bool = check();
* // returns <boolean>
*/
function check() {
	var buf = allocUnsafe( 1 );
	return isUint8Array( buf );
}


// EXPORTS //

module.exports = check;
