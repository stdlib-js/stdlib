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
* Interface for a regular expression to match a native function.
*/
interface ReNativeFunction {
	/**
	* Returns a regular expression to match a native function.
	*
	* @returns regular expression
	*
	* @example
	* var RE_NATIVE_FUNCTION = reNativeFunction();
	* var bool = RE_NATIVE_FUNCTION.test( Date.toString() );
	* // returns true
	*/
	(): RegExp;

	/**
	* Regular expression to match a native function.
	*
	* @example
	* var bool = reNativeFunction.REGEXP.test( Date.toString() );
	* // returns true
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to match a native function.
*
* @returns regular expression
*
* @example
* var RE_NATIVE_FUNCTION = reNativeFunction();
* var bool = RE_NATIVE_FUNCTION.test( Date.toString() );
* // returns true
*
* @example
* var bool = reNativeFunction.REGEXP.test( Date.toString() );
* // returns true
*/
declare var reNativeFunction: ReNativeFunction;


// EXPORTS //

export = reNativeFunction;
