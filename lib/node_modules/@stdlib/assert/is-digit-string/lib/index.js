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
* Test whether a string contains only numeric digits.
*
* @module @stdlib/assert/is-digit-string
*
* @example
* var isDigitString = require( '@stdlib/assert/is-digit-string' );
*
* var out = isDigitString( '0123456789' );
* // returns true
*
* out = isDigitString( '0xffffff' );
* // returns false
*
* out = isDigitString( '' );
* // returns false
*/

// MODULES //

var isDigitString = require( './main.js' );


// EXPORTS //

module.exports = isDigitString;
