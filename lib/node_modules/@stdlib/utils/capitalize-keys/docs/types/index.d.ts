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
* Converts the first letter of each object key to uppercase.
*
* ## Notes
*
* -   The function only transforms own properties. Hence, the function does not transform inherited properties.
* -   The function shallow copies key values.
*
* @param obj - source object
* @returns new object
*
* @example
* var obj1 = {
*     'aa': 1,
*     'bb': 2
* };
*
* var obj2 = capitalizeKeys( obj1 );
* // returns { 'Aa': 1, 'Bb': 2 }
*/
declare function capitalizeKeys( obj: Object ): Object;


// EXPORTS //

export = capitalizeKeys;
