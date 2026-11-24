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

var hasIsConcatSpreadableSymbolSupport = require( '@stdlib/assert/has-is-concat-spreadable-symbol-support' ); // eslint-disable-line id-length


// MAIN //

/**
* Concat spreadable symbol.
*
* @name IsConcatSpreadableSymbol
* @constant
* @type {(symbol|null)}
*
* @example
* var x = {
*     'length': 3,
*     '0': 1,
*     '1': 2,
*     '2': 3
* };
*
* x[ IsConcatSpreadableSymbol ] = true;
*/
var IsConcatSpreadableSymbol = ( hasIsConcatSpreadableSymbolSupport() ) ? Symbol.isConcatSpreadable : null; // eslint-disable-line max-len


// EXPORTS //

module.exports = IsConcatSpreadableSymbol;
