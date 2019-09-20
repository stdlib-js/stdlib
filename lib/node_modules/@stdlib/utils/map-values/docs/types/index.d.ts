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
* Returns an object value.
*
* @returns new value
*/
type Nullary = () => any;

/**
* Returns an object value.
*
* @param value - object value corresponding to `key`
* @returns new value
*/
type Unary = ( key: string ) => any;

/**
* Returns an object value.
*
* @param value - object value corresponding to `key`
* @param key - object key
* @returns new value
*/
type Binary = ( value: any, key: string ) => any;

/**
* Returns an object value.
*
* @param value - object value corresponding to `key`
* @param key - object key
* @param obj - the input object
* @returns new value
*/
type Tertiary = ( value: any, key: string, obj: any ) => any;

/**
* Returns an object value.
*
* @param value - object value corresponding to `key`
* @param key - object key
* @param obj - the input object
* @returns new value
*/
type Transform = Nullary | Unary | Binary | Tertiary;

/**
* Maps values from one object to a new object having the same keys.
*
* ## Notes
*
* -   The transform function is provided three arguments:
*
*     -   `value`: object value corresponding to `key`
*     -   `key`: object key
*     -   `obj`: the input object
*
* -   The function only maps values from own properties. Hence, the function does not map inherited properties.
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
* function transform( value, key ) {
*     return key + value;
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = mapValues( obj1, transform );
* // returns { 'a': 'a1', 'b': 'b2' }
*/
declare function mapValues( obj: any, transform: Transform ): any;


// EXPORTS //

export = mapValues;
