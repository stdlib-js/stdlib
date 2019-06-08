/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Creates a single-precision floating-point number from an IEEE 754 literal bit representation.
*
* @param bstr - string which is a literal bit representation
* @throws must provide a string with a length equal to `32`
* @returns single-precision floating-point number
*
* @example
* var bstr = '01000000100000000000000000000000';
* var v = fromBinaryStringf( bstr );
* // returns 4.0
*
* @example
* var bstr = '01000000010010010000111111011011';
* var v = fromBinaryStringf( bstr );
* // returns ~3.14
*
* @example
* var bstr = '11111111011011000011101000110011';
* var v = fromBinaryStringf( bstr );
* // returns ~-3.14e+38
*
* @example
* var bstr = '00000000000000000000000000000000';
* var v =  fromBinaryStringf( bstr );
* // returns 0.0
*
* @example
* var bstr = '10000000000000000000000000000000';
* var v = fromBinaryStringf( bstr );
* // returns -0.0
*/
declare function fromBinaryStringf( bstr: string ): number;


// EXPORTS //

export = fromBinaryStringf;
