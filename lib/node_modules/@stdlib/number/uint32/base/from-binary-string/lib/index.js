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
* Create an unsigned 32-bit integer from a literal bit representation.
*
* @module @stdlib/number/uint32/base/from-binary-string
*
* @example
* var fromBinaryStringUint32 = require( '@stdlib/number/uint32/base/from-binary-string' );
*
* var bstr = '01010101010101010101010101010101';
* var val = fromBinaryStringUint32( bstr );
* // returns 1431655765
*
* bstr = '00000000000000000000000000000000';
* val = fromBinaryStringUint32( bstr );
* // returns 0
*
* bstr = '00000000000000000000000000000010';
* val = fromBinaryStringUint32( bstr );
* // returns 2
*
* bstr = '11111111111111111111111111111111';
* val = fromBinaryStringUint32( bstr );
* // returns 4294967295
*/

// MODULES //

var fromBinaryStringUint32 = require( './main.js' );


// EXPORTS //

module.exports = fromBinaryStringUint32;
