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
* Tests if an object has a specified method name.
*
* ## Notes
*
* -   Value arguments other than `null` or `undefined` are coerced to objects.
* -   Property arguments are coerced to strings.
* -   The function only searches own properties.
*
* @param value - value to test
* @param property - property to test
* @returns boolean indicating if an object has a specified method name
*
* @example
* var beep = {
*     'boop': isMethod
* };
*
* var bool = isMethod( beep, 'boop' );
* // returns true
*
* var bool = isMethod( beep, 'toString' );
* // returns false
*/
declare function isMethod( value: any, property: any ): boolean;


// EXPORTS //

export = isMethod;
