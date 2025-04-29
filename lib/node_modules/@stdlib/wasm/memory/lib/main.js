/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MAIN //

/**
* WebAssembly memory constructor.
*
* @name Memory
* @constructor
* @type {Function}
* @param {Object} descriptor - memory descriptor object
* @param {NonNegativeInteger} descriptor.initial - initial size of WebAssembly memory (in units of pages)
* @param {NonNegativeInteger} [descriptor.maximum] - maximum size that WebAssembly memory is allowed to grow to (in units of pages)
* @param {boolean} [descriptor.shared=false] - boolean indicating whether the memory is shared
* @returns {Memory} memory instance
*
* @example
* var mem = new Memory({
*     'initial': 0
* });
*/
var Memory = ( typeof WebAssembly === 'object' ) ? WebAssembly.Memory : null;


// EXPORTS //

module.exports = Memory;
