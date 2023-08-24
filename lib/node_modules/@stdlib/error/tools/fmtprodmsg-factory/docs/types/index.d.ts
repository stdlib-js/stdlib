/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

/**
* Formats an error message for production.
*
* @param code - error code
* @param ...args - error message arguments
* @returns formatted error message
*/
type FormatProdErrorMsgFunction = ( code: any, ...args: Array<any> ) => string;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Website URL for full error message.
	*/
	url?: string;

	/**
	* Error message template with `{{url}}` and `{{code}}` placeholders that will be replaced.
	*/
	message?: string;
}


/**
* Returns a function which formats an error message for production.
*
* @param options - function options
* @param options.url - website URL for full error message (default: `'https://stdlib.io/docs/api/latest/error-decoder.html'`)
* @param options.message - error message template with `{{url}}` and `{{code}}` placeholders that will be replaced (default: `'Minified stdlib error code: {{code}}. Visit {{url}} for the full message.'`)
* @returns error formatting function
*
* @example
* var opts = {
*     'url': 'https://stdlib.io/error-decoder.html'
* };
*
* var fcn = factory( opts );
* // returns <Function>
*/
declare function fmtprodmsgFactory( options?: Options ): FormatProdErrorMsgFunction; // tslint-disable-line max-line-length


// EXPORTS //

export = fmtprodmsgFactory;
