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
* Create a double-precision floating-point number from a literal bit representation.
*
* @module @stdlib/number/float64/base/from-binary-string
*
* @example
* var fromBinaryString = require( '@stdlib/number/float64/base/from-binary-string' );
*
* var bstr = '0100000000010000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns 4.0
*
* bstr = '0100000000001001001000011111101101010100010001000010110100011000';
* val = fromBinaryString( bstr );
* // returns 3.141592653589793
*
* bstr = '1111111111100001110011001111001110000101111010111100100010100000';
* val = fromBinaryString( bstr );
* // returns -1.0e308
*
* bstr = '1000000000000000000000000000000000000000000000000001100011010011';
* val = fromBinaryString( bstr );
* // returns -3.14e-320
*
* bstr = '0000000000000000000000000000000000000000000000000000000000000001';
* val = fromBinaryString( bstr );
* // returns 5.0e-324
*
* bstr = '0000000000000000000000000000000000000000000000000000000000000000';
* val = fromBinaryString( bstr );
* // returns 0.0
*
* bstr = '1000000000000000000000000000000000000000000000000000000000000000';
* val = fromBinaryString( bstr );
* // returns -0.0
*
* bstr = '0111111111111000000000000000000000000000000000000000000000000000';
* val = fromBinaryString( bstr );
* // returns NaN
*
* bstr = '0111111111110000000000000000000000000000000000000000000000000000';
* val = fromBinaryString( bstr );
* // returns Infinity
*
* bstr = '1111111111110000000000000000000000000000000000000000000000000000';
* val = fromBinaryString( bstr );
* // returns -Infinity
*/

// MODULES //

var fromBinaryString = require( './main.js' );


// EXPORTS //

module.exports = fromBinaryString;
