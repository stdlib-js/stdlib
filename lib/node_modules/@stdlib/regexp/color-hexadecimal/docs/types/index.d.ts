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

type MODES = 'full' | 'shorthand' | 'either';


/**
* Interface for a regular expression to match a hexadecimal color.
*/
interface ReColorHexadecimal {
	/**
	* Returns a regular expression to match a hexadecimal color.
	*
	* @param mode - color format  (`full`, `shorthand`, or `either`)
	* @returns regular expression
	*
	* @example
	* var RE = reColorHexadecimal();
	* // returns <RegExp>
	*
	* var bool = RE.test( 'ffffff' );
	* // returns true
	*
	* bool = RE.test( '000' );
	* // returns false
	*
	* @example
	* var RE = reColorHexadecimal( 'shorthand' );
	* // returns <RegExp>
	*
	* var bool = RE.test( '000' );
	* // returns true
	*
	* @example
	* var RE = reColorHexadecimal( 'either' );
	* // returns <RegExp>
	*
	* var bool = RE.test( '000' );
	* // returns true
	*/
	( mode?: MODES ): RegExp;

	/**
	* Regular expression to match a full hexadecimal color.
	*
	* @example
	* var bool = reColorHexadecimal.REGEXP.test( 'ffffff' );
	* // returns true
	*/
	REGEXP: RegExp;

	/**
	* Regular expression to match a shorthand hexadecimal color.
	*
	* @example
	* var bool = reColorHexadecimal.REGEXP_SHORTHAND.test( 'ffffff' );
	* // returns false
	*/
	REGEXP_SHORTHAND: RegExp;

	/**
	* Regular expression to match **either** a shorthand or a full length hexadecimal color.
	*
	* @example
	* var bool = reColorHexadecimal.REGEXP_EITHER.test( 'ffffff' );
	* // returns true
	*/
	REGEXP_EITHER: RegExp;
}

/**
* Returns a regular expression to match a hexadecimal color.
*
* @param mode - color format  (`full`, `shorthand`, or `either`)
* @returns regular expression
*
* @example
* var RE = reColorHexadecimal();
* // returns <RegExp>
*
* var bool = RE.test( 'ffffff' );
* // returns true
*
* bool = RE.test( '000' );
* // returns false
*
* @example
* var bool = reColorHexadecimal.REGEXP.test( 'ffffff' );
* // returns true
*/
declare var reColorHexadecimal: ReColorHexadecimal;


// EXPORTS //

export = reColorHexadecimal;
