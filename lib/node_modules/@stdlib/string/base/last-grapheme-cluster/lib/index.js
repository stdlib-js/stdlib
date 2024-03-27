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

/**
* Return the last `n` grapheme clusters (i.e., user-perceived characters) of a string.
*
* @module @stdlib/string/base/last-grapheme-cluster
*
* @example
* var last = require( '@stdlib/string/base/last-grapheme-cluster' );
*
* var out = last( 'Hello', 1 );
* // returns 'o';
*
* out = last( 'JavaScript', 1 );
* // returns 'Script';
*
* out = last( '🐮🐷🐸🐵', 2 );
* // returns '🐸🐵';
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
