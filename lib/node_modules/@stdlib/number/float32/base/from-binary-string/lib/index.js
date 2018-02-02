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
* Create a single-precision floating-point number from an IEEE 754 literal bit representation.
*
* @module @stdlib/number/float32/base/from-binary-string
*
* @example
* var fromBinaryStringf = require( '@stdlib/number/float32/base/from-binary-string' );
*
* var bstr = '01000000100000000000000000000000';
* var val = fromBinaryStringf( bstr );
* // returns 4.0
*
* bstr = '01000000010010010000111111011011';
* val = fromBinaryStringf( bstr );
* // returns ~3.14
*
* bstr = '11111111011011000011101000110011';
* val = fromBinaryStringf( bstr );
* // returns ~-3.14e+38
*/

// MODULES //

var fromBinaryStringf = require( './main.js' );


// EXPORTS //

module.exports = fromBinaryStringf;
