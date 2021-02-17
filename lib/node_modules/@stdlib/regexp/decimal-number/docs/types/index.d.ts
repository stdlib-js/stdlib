/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
	* Boolean indicating whether to create a capture group for the match.
	*/
	capture?: boolean;

	/**
	* Regular expression flags.
	*/
	flags?: string;
}

/**
* Interface for a regular expression to match a decimal number.
*/
interface ReDecimalNumber {
	/**
	* Returns a regular expression to match a decimal number.
	*
	* @param options - function options
	* @param options.flags - regular expression flags (default: '')
	* @param options.capture - boolean indicating whether to create a capture group for the match (default: false)
	* @returns regular expression
	*
	* @example
	* var RE_DECIMAL_NUMBER = reDecimalNumber();
	*
	* var bool = RE_DECIMAL_NUMBER.test( 'beep 1.0 boop' );
	* // returns true
	*
	* @example
	* var RE_DECIMAL_NUMBER = reDecimalNumber({
	*     'capture': true
	* });
	*
	* var bool = RE_DECIMAL_NUMBER.exec( '1.234' );
	* // returns [ '1.234', '1.234' ]
	*
	* @example
	* var RE_DECIMAL_NUMBER = reDecimalNumber({
	*     'capture': false
	* });
	*
	* var bool = RE_DECIMAL_NUMBER.exec( '1.234' );
	* // returns [ '1.234' ]
	*/
	( options?: Options ): RegExp;

	/**
	* Regular expression to match a decimal number.
	*
	* @example
	* var bool = reDecimalNumber.REGEXP.test( '2:3' );
	* // returns false
	*/
	REGEXP: RegExp;

	/**
	* Regular expression to capture decimal number.
	*
	* @example
	* var parts = reDecimalNumber.REGEXP_CAPTURE.exec( '1.234' );
	* // returns [ '1.234', '1.234' ]
	*/
	REGEXP_CAPTURE: RegExp;
}

/**
* Returns a regular expression to match a decimal number.
*
* @param options - function options
* @param options.flags - regular expression flags (default: '')
* @param options.capture - boolean indicating whether to create a capture group for the match (default: false)
* @returns regular expression
*
* @example
* var RE_DECIMAL_NUMBER = reDecimalNumber();
*
* var bool = RE_DECIMAL_NUMBER.test( 'beep 1.0 boop' );
* // returns true
*
* @example
* var RE_DECIMAL_NUMBER = reDecimalNumber({
*     'flags': 'gm'
* });
* var bool = RE_DECIMAL_NUMBER.test( 'beep 1.0 boop' );
* // returns true
*
* @example
* var bool = reDecimalNumber.REGEXP.test( '2:3' );
* // returns false
*/
declare var reDecimalNumber: ReDecimalNumber;


// EXPORTS //

export = reDecimalNumber;
