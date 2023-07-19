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
	* Boolean indicating whether to return a mask using symbolic notation.
	*/
	symbolic?: boolean;
}

/**
* Get/set the process mask.
*
* ## Notes
*
* -   If provided a mask, the function sets the current mask and returns the previous process mask. Otherwise, the function returns the current process mask.
*
*
* @param mask - mask
* @param options - options
* @param options.symbolic - boolean indicating whether to return a mask using symbolic notation
* @throws must provide valid options
* @throws must provide a parseable expression mask
* @returns process mask
*
* @example
* var mask = umask();
* // returns <number>
*/
declare function umask( mask: number | string, options?: Options ): number | string; // tslint-disable-line max-line-length

/**
* Get/set the process mask.
*
* @param options - options
* @param options.symbolic - boolean indicating whether to return a mask using symbolic notation
* @throws must provide valid options
* @returns process mask
*
* @example
* var mask = umask();
* // returns <number>
*/
declare function umask( options?: Options ): number | string;


// EXPORTS //

export = umask;
