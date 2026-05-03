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

var hasAsyncIteratorSymbolSupport = require( '@stdlib/assert/has-async-iterator-symbol-support' ); // eslint-disable-line id-length


// MAIN //

/**
* Async iterator symbol.
*
* @name AsyncIteratorSymbol
* @constant
* @type {(symbol|null)}
*
* @example
* if ( AsyncIteratorSymbol === null ) {
*     console.log( 'Environment does not support Symbol.asyncIterator.' );
* } else {
*     console.log( 'Environment does support Symbol.asyncIterator.' );
* }
*/
var AsyncIteratorSymbol = ( hasAsyncIteratorSymbolSupport() ) ? Symbol.asyncIterator : null; // eslint-disable-line max-len


// EXPORTS //

module.exports = AsyncIteratorSymbol;
