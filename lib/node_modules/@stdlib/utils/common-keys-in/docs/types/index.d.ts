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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

/**
* Returns the common own and inherited property names of two or more objects.
*
* @param obj1 - first object
* @param obj2 - second object
* @param obj - additional objects
* @returns common keys
*
* @example
* var obj = {
*     'a': 1,
*     'b': 2,
*     'c': 3
* };
*
* var obj2 = {
*     'a': 1,
*     'b': 2
* };
*
* var keys = commonKeysIn( obj, obj2 );
* // returns [ 'a', 'b' ]
*
* @example
* var obj1 = {
*     'a': 1,
*     'b': 2,
*     'c': 3
* };
*
* var obj2 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj3 = {
*     'a': 1,
* };
*
* var keys = commonKeysIn( obj1, obj2, obj3 );
* // returns [ 'a' ]
*/
declare function commonKeysIn( obj1: any, obj2: any, ...obj: Array<any> ): Array<string>;


// EXPORTS //

export = commonKeysIn;
