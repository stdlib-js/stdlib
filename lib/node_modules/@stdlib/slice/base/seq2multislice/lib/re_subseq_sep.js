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

// MAIN //

/**
* Matches a character sequence for a comma separator used to delineate subsequence strings.
*
* Regular expression: `\s*,\s*`
*
* -   `\s*`
*
*     -   match zero or more whitespace characters
*
* -   `,`
*
*     -   match the comma character exactly
*
* -   `\s*`
*
*     -   match zero or more whitespace characters
*
* ## Notes
*
* -   The regular expression allows for whitespace to surround the `,` character in multi-dimensional subsequence strings (e.g., '2:10 , 4:1 , ... , 1' vs '2:10,4:1,...,1').
*
* @private
* @name RE_SUBSEQ_SEP
* @type {RegExp}
*
* @example
* var parts = ','.split( RE_SUBSEQ_SEP );
* // returns [ '', '' ]
*
* parts = ' , '.split( RE_SUBSEQ_SEP );
* // returns [ '', '' ]
*/
var RE_SUBSEQ_SEP = /\s*,\s*/;


// EXPORTS //

module.exports = RE_SUBSEQ_SEP;
