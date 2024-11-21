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
* Convert a UTF-16 encoded string to an array of integers using UTF-8 encoding.
*
* @module @stdlib/string/utf16-to-utf8-array
*
* @example
* var utf16ToUTF8Array = require( '@stdlib/string/utf16-to-utf8-array' );
*
* var str = '☃';
* var out = utf16ToUTF8Array( str );
* // returns [ 226, 152, 131 ]
*/

// MODULES //

var utf16ToUTF8Array = require( './main.js' );


// EXPORTS //

module.exports = utf16ToUTF8Array;
