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

var hasHasInstanceSymbolSupport = require( '@stdlib/assert/has-has-instance-symbol-support' ); // eslint-disable-line id-length


// MAIN //

/**
* Has instance symbol.
*
* @name HasInstanceSymbol
* @constant
* @type {(symbol|null)}
*
* @example
* var isArray = require( '@stdlib/assert/is-array' );
*
* function ArrayLike() {
*     return {
*         'length': 3,
*         '0': 1,
*         '1': 2,
*         '2': 3
*     };
* };
*
* ArrayLike[ HasInstanceSymbol ] = isArray;
*/
var HasInstanceSymbol = ( hasHasInstanceSymbolSupport() ) ? Symbol.hasInstance : null; // eslint-disable-line max-len


// EXPORTS //

module.exports = HasInstanceSymbol;
