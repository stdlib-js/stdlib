/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Create a half-precision floating-point number from an IEEE 754 literal bit representation.
*
* @module @stdlib/number/float16/base/from-binary-string
*
* @example
* var fromBinaryString = require( '@stdlib/number/float16/base/from-binary-string' );
*
* var bstr = '0100010000000000';
* var val = fromBinaryString( bstr );
* // returns 4.0
*
* bstr = '0100001001001000';
* val = fromBinaryString( bstr );
* // returns ~3.140625
*
* bstr = '1110001111010000';
* val = fromBinaryString( bstr );
* // returns -1000.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
