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
* Tests whether a string contains only hexadecimal digits.
*
* @param x - value to test
* @returns boolean indicating if a string contains only hexadecimal digits
*
* @example
* var out = isHexString( '0123456789abcdefABCDEF' );
* // returns true
*
* @example
* var out = isHexString( '0xffffff' );
* // returns false
*
* @example
* var out = isHexString( '' );
* // returns false
*
* @example
* var out = isHexString( 123 );
* // returns false
*/
declare function isHexString( value: any ): boolean;


// EXPORTS //

export = isHexString;
