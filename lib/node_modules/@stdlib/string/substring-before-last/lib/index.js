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
* Return the part of a string before the last occurrence of a specified substring.
*
* @module @stdlib/string/substring-before-last
*
* @example
* var substringBeforeLast = require( '@stdlib/string/substring-before-last' );
*
* var str = 'Beep Boop Beep';
* var out = substringBeforeLast( str, 'Beep' );
* // returns 'Beep Boop '
*
* out = substringBeforeLast( str, 'Boop' );
* // returns 'Beep '
*/

// MODULES //

var substringBeforeLast = require( './main.js' );


// EXPORTS //

module.exports = substringBeforeLast;
