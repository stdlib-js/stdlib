/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Returns a regular expression that matches and captures a complex number, supporting standard notation, scientific notation, Infinity, and NaN (e.g., "3+4i", "-1.5e10", "NaN-i").
*
* Regular expression: `/^(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)\s*(?=$|[+-]))?(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)?\s*(i)\s*)?$/`
*
* -   `^`
*     -   start of input
*
* -   `(?:\s*([+-]?)\s*`
*     -   open an optional non-capturing group for the real part and capture an optional `+` or `-` literal for its sign, ignoring surrounding whitespace
*
* -   `((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)`
*     -   capture the real magnitude, matching standard decimals, scientific notation, `Infinity`, or `NaN`
*
* -   `\s*(?=$|[+-]))?`
*     -   match optional trailing whitespace, assert via positive lookahead that the real part is followed by either the end of input or the sign for the imaginary part, and close the real part group
*
* -   `(?:\s*([+-]?)\s*`
*     -   open an optional non-capturing group for the imaginary part and capture an optional `+` or `-` literal for its sign, ignoring surrounding whitespace
*
* -   `((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)?`
*     -   capture the optional imaginary magnitude, matching standard decimals, scientific notation, `Infinity`, or `NaN`
*
* -   `\s*(i)\s*)?`
*     -   capture the literal character `i` for the imaginary unit, ignoring surrounding whitespace, and close the imaginary part group
*
* -   `$`
*     -   end of input
*
* ## Notes
*
* -   The regular expression has the following capture groups:
*
*     1.  Sign of real part
*     2.  Value of real part
*     3.  Sign of imaginary part
*     4.  Value of imaginary part
*     5.  Imaginary suffix 'i'
*
* @private
* @returns {RegExp} regular expression
*/
function regexp() {
	return /^(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)\s*(?=$|[+-]))?(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)?\s*(i)\s*)?$/;
}


// EXPORTS //

module.exports = regexp;
