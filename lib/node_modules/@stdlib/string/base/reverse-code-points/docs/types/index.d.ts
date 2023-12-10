/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Reverses the Unicode code points of a string.
*
* @param str - input string
* @returns output string
*
* @example
* var out = reverse( 'last man standing' );
* // returns 'gnidnats nam tsal'
*
* @example
* var out = reverse( 'presidential election' );
* // returns 'noitcele laitnediserp'
*
* @example
* var out = reverse( 'JavaScript' );
* // returns 'tpircSavaJ'
*
* @example
* var out = reverse( 'Hidden Treasures' );
* // returns 'serusaerT neddiH'
*
* @example
* var out = reverse( 'foo bar' );
* // returns 'rab oof'
*/
declare function reverse( str: string ): string;


// EXPORTS //

export = reverse;
