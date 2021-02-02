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

/**
* Return a regular expression to match a decimal number.
*
* @module @stdlib/regexp/decimal-number
*
* @example
* var reDecimalNumber = require( '@stdlib/regexp/decimal-number' );
*
* var RE_DECIMAL_NUMBER = reDecimalNumber();
*
* var bool = RE_DECIMAL_NUMBER.test( 'beep 1.0 boop' );
* // returns true
*
* bool = RE_DECIMAL_NUMBER.test( 'beep 1 boop' );
* // returns false
*
* @example
* var reDecimalNumber = require( '@stdlib/regexp/decimal-number' );
*
* var RE_DECIMAL_NUMBER = reDecimalNumber({
*     'flags': 'gm'
* });
* var bool = RE_DECIMAL_NUMBER.test( 'beep 1.0 boop' );
* // returns true
*
* @example
* var reDecimalNumber = require( '@stdlib/regexp/decimal-number' );
*
* var bool = reDecimalNumber.REGEXP.test( '2:3' );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var reDecimalNumber = require( './main.js' );
var REGEXP_CAPTURE = require( './regexp_capture.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( reDecimalNumber, 'REGEXP', REGEXP );
setReadOnly( reDecimalNumber, 'REGEXP_CAPTURE', REGEXP_CAPTURE );


// EXPORTS //

module.exports = reDecimalNumber;
