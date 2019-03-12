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
* Tests if an object has a specified method name, either own or inherited.
*
* ## Notes
*
* -   Value arguments other than `null` or `undefined` are coerced to objects.
* -   Non-symbol property arguments are coerced to strings.
*
* @param value - value to test
* @param property - property to test
* @returns boolean indicating if an object has a specified method name
*
* @example
* var beep = {
*     'boop': true
* };
*
* var bool = isMethodIn( beep, 'toString' );
* // returns true
*
* bool = isMethodIn( beep, 'boop' );
* // returns false
*/
declare function isMethodIn( value: any, property: any ): boolean;


// EXPORTS //

export = isMethodIn;
