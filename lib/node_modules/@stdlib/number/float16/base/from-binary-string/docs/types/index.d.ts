/*
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

// TypeScript Version: 4.1

/**
* Creates a half-precision floating-point number from an IEEE 754 literal bit representation.
*
* @param bstr - string which is a literal bit representation
* @throws must provide a string with a length equal to `16`
* @returns half-precision floating-point number
*
* @example
* var bstr = '0100010000000000';
* var v = fromBinaryString( bstr );
* // returns 4.0
*
* @example
* var bstr = '0100001001001000';
* var v = fromBinaryString( bstr );
* // returns ~3.140625
*
* @example
* var bstr = '1110001111010000';
* var v = fromBinaryString( bstr );
* // returns -1000.0
*
* @example
* var bstr = '0000000000000000';
* var v = fromBinaryString( bstr );
* // returns 0.0
*
* @example
* var bstr = '1000000000000000';
* var v = fromBinaryString( bstr );
* // returns -0.0
*/
declare function fromBinaryString( bstr: string ): number;


// EXPORTS //

export = fromBinaryString;
