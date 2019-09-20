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
* Returns an object key.
*
* @returns new key
*/
type Nullary = () => string | symbol;

/**
* Returns an object key.
*
* @param key - object key
* @returns new key
*/
type Unary = ( key: string ) => string | symbol;

/**
* Returns an object key.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @returns new key
*/
type Binary = ( key: string, value: any ) => string | symbol;

/**
* Returns an object key.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @param obj - the input object
* @returns new key
*/
type Tertiary = ( key: string, value: any, obj: any ) => string | symbol;

/**
* Returns an object key.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @param obj - the input object
* @returns new key
*/
type Transform = Nullary | Unary | Binary | Tertiary;

/**
* Maps keys from one object to a new object having the same values.
*
* ## Notes
*
* -   The transform function is provided three arguments:
*
*     -   `key`: object key
*     -   `value`: object value corresponding to `key`
*     -   `obj`: the input object
*
* -   The value returned by a transform function should be a value which can be serialized as an object key.
*
* -   The function only maps own properties. Hence, the function does not map inherited properties.
*
* -   The function shallow copies key values.
*
* -   Iteration order is **not** guaranteed.
*
* @param obj - source object
* @param transform - transform function
* @returns new object
*
* @example
* function transform( key, value ) {
*     return key + value;
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = mapKeys( obj1, transform );
* // returns { 'a1': 1, 'b2': 2 }
*/
declare function mapKeys( obj: any, transform: Transform ): any;


// EXPORTS //

export = mapKeys;
