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
* Returns the name of a function.
*
* ## Notes
*
* -   If provided an anonymous function, the function returns an empty `string` or the string `"anonymous"`.
*
* @param fcn - input function
* @returns function name
*
* @example
* var v = functionName( String );
* // returns 'String'
*/
declare function functionName( fcn: Function ): string;


// EXPORTS //

export = functionName;
