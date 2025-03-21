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

// EXPORTS //

/**
* Returns a boolean.
*
* ## Notes
*
* -   When invoked without `new`,
*
*     -   if provided `false`, `null`, `undefined`, `-0`, `0`, `NaN`, or an empty string, the function returns `false`.
*     -   if provided any other value, including an empty object, an empty array, the string `'false'`, or a `Boolean` object (including a `Boolean` object whose value is `false`), the function returns `true`.
*
* -   When invoked with `new`, the constructor returns a `Boolean` object, which is an object wrapper for a primitive boolean value. The value of the returned `Boolean` object follows the same conversion semantics as when the constructor is invoked without `new`.
*
* @param value - input value
* @returns boolean or boolean object
*
* @example
* var b = Boolean( null );
* // returns false
*
* b = Boolean( [] );
* // returns true
*
* b = Boolean( {} );
* // returns true
*
* @example
* var b = new Boolean( false );
* // returns <Boolean>
*/
export = Boolean;
