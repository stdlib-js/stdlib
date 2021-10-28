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

/**
* Return the prev extended grapheme cluster break in a string before a specified position.
*
* @module @stdlib/string/prev-grapheme-cluster-break
*
* @example
* var prevGraphemeClusterBreak = require( '@stdlib/string/prev-grapheme-cluster-break' );
*
* var out = prevGraphemeClusterBreak( 'अनुच्छेद', 2 );
* // returns 0
*
* out = prevGraphemeClusterBreak( '🌷', 1 );
* // returns -1
*/

// MODULES //

var prevGraphemeClusterBreak = require( './main.js' );


// EXPORTS //

module.exports = prevGraphemeClusterBreak;
