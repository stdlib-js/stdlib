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
* Creates a double-precision floating-point number from a literal bit representation.
*
* @param bstr - string which is a literal bit representation
* @throws must provide a string with a length equal to `64`
* @returns double
*
* @example
* var bstr = '0100000000010000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns 4.0
*
* @example
* var bstr = '0100000000001001001000011111101101010100010001000010110100011000';
* var val = fromBinaryString( bstr );
* // returns 3.141592653589793
*
* @example
* var bstr = '1111111111100001110011001111001110000101111010111100100010100000';
* var val = fromBinaryString( bstr );
* // returns -1.0e308
*
* @example
* var bstr = '1000000000000000000000000000000000000000000000000001100011010011';
* var val = fromBinaryString( bstr );
* // returns -3.14e-320
*
* @example
* var bstr = '0000000000000000000000000000000000000000000000000000000000000001';
* var val = fromBinaryString( bstr );
* // returns 5.0e-324
*
* @example
* var bstr = '0000000000000000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns 0.0
*
* @example
* var bstr = '1000000000000000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns -0.0
*
* @example
* var bstr = '0111111111111000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns NaN
*
* @example
* var bstr = '0111111111110000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns Infinity
*
* @example
* var bstr = '1111111111110000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns -Infinity
*/
declare function fromBinaryString( bstr: string ): number;


// EXPORTS //

export = fromBinaryString;
