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

/**
* Remove the first `n` UTF-16 code units of a string.
*
* @module @stdlib/string/base/remove-first
*
* @example
* var removeFirst = require( '@stdlib/string/base/remove-first' );
*
* var out = removeFirst( 'last man standing', 1 );
* // returns 'ast man standing'
*
* out = removeFirst( 'Hidden Treasures', 1 );
* // returns 'idden Treasures';
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
