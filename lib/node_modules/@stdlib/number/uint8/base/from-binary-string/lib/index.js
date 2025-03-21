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
* Create an unsigned 8-bit integer from a literal bit representation.
*
* @module @stdlib/number/uint8/base/from-binary-string
*
* @example
* var fromBinaryStringUint8 = require( '@stdlib/number/uint8/base/from-binary-string' );
*
* var bstr = '01010101';
* var val = fromBinaryStringUint8( bstr );
* // returns 85
*
* bstr = '00000000';
* val = fromBinaryStringUint8( bstr );
* // returns 0
*
* bstr = '00000010';
* val = fromBinaryStringUint8( bstr );
* // returns 2
*
* bstr = '11111111';
* val = fromBinaryStringUint8( bstr );
* // returns 255
*/

// MODULES //

var fromBinaryStringUint8 = require( './main.js' );


// EXPORTS //

module.exports = fromBinaryStringUint8;
