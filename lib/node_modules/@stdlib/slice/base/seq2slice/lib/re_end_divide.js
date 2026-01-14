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
* Matches a division operation following an 'end' character sequence.
*
* Regular expression: `/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)?$/`
*
* -   `(?:\s*\/\s*)`
*
*     -   capture but do not remember a divide sign surrounded by any amount of whitespace
*
* -   `(?=\d*\.?\d+)`
*
*     -   but only match when the minus divide is followed by one or more digits
*
* -   `(\d*\.?\d+)`
*
*     -   capture one or more digits
*
* -   `$`
*
*     -   end of input
*
* @private
* @name RE_END_DIVIDE
* @type {RegExp}
*
* @example
* var m = 'end/2'.match( RE_END_DIVIDE );
* // returns [...]
*
* var v = m[ 1 ];
* // returns '2'
*
* m = 'end / 2'.match( RE_END_DIVIDE );
* // returns [...]
*
* v = m[ 1 ];
* // returns '2'
*
* m = 'end / 2.4'.match( RE_END_DIVIDE );
* // returns [...]
*
* v = m[ 1 ];
* // returns '2.4'
*/
var RE_END_DIVIDE = /(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;


// EXPORTS //

module.exports = RE_END_DIVIDE;
