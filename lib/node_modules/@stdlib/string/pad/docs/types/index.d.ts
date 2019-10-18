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
* Interface defining function options.
*/
interface Options {
	/**
	* String used to left pad.
	*/
	lpad?: string;

	/**
	* String used to right pad.
	*/
	rpad?: string;

	/**
	* Boolean indicating whether to center right in the event of a tie.
	*/
	centerRight?: boolean;
}

/**
* Pads a string such that the padded string has a length of `len`.
*
* @param str - string to pad
* @param len - string length
* @param options - function options
* @param options.lpad - string used to left pad (default: '')
* @param options.rpad - string used to right pad (default: ' ')
* @param options.centerRight - boolean indicating whether to center right in the event of a tie (default: false)
* @throws second argument must be a nonnegative integer
* @throws must provide valid options
* @throws at least one padding must have a length greater than `0`
* @returns padded string
*
* @example
* var str = pad( 'a', 5 );
* // returns 'a    '
*
* @example
* var str = pad( 'a', 10, {
*     'lpad': 'b'
* });
* // returns 'bbbbbbbbba'
*
* @example
* var str = pad( 'a', 12, {
*     'rpad': 'b'
* });
* // returns 'abbbbbbbbbbb'
*
* @example
* var opts = {
*     'lpad': 'a',
*     'rpad': 'c'
* };
* var str = pad( 'b', 10, opts );
* // returns 'aaaabccccc'
*
* @example
* var opts = {
*     'lpad': 'a',
*     'rpad': 'c',
*     'centerRight': true
* };
* var str = pad( 'b', 10, opts );
* // returns 'aaaaabcccc'
*/
declare function pad( str: string, len: number, options?: Options ): string;


// EXPORTS //

export = pad;
