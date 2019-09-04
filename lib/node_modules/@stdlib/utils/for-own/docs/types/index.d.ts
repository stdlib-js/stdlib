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
* Invokes a function once for each own enumerable property of an object.
*
* ## Notes
*
* -   When invoked, the function is provided three arguments:
*
*     -   `value`: object property value
*     -   `key`: object property
*     -   `obj`: the input object
*
* -   To terminate iteration before visiting all properties, the provided function must explicitly return `false`.
*
* -   The function determines the list of own enumerable properties *before* invoking the provided function. Hence, any modifications made to the input object *after* calling this function (such as adding and removing properties) will *not* affect the list of visited properties.
*
* -   Iteration order is **not** guaranteed.
*
*
* @param obj - input object
* @param fcn - function to invoke
* @param thisArg - execution context
* @returns obj - input object
*
* @example
* function log( v, key ) {
*     console.log( '%s: %d', key, v );
* }
*
* var obj = {
*     'a': 1,
*     'b': 2,
*     'c': 3,
*     'd': 4
* };
*
* forOwn( obj, log );
*/
declare function forOwn( obj: any, fcn: Function, thisArg?: any ): any;


// EXPORTS //

export = forOwn;
