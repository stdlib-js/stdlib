/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Return the number of grapheme clusters in a string.
*
* @module @stdlib/string/num-grapheme-clusters
*
* @example
* var numGraphemeClusters = require( '@stdlib/string/num-grapheme-clusters' );
*
* var out = numGraphemeClusters( 'last man standing' );
* // returns 17
*
* out = numGraphemeClusters( '🌷' );
* // returns 1
*/

// MODULES //

var numGraphemeClusters = require( './main.js' );


// EXPORTS //

module.exports = numGraphemeClusters;
