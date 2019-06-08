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
* Checks whether an iterated property passes a test.
*
* @returns boolean indicating whether an iterated property passes a test
*/
type Nullary = () => boolean;

/**
* Checks whether an iterated property passes a test.
*
* @param key - iteration key
* @returns boolean indicating whether an iterated property passes a test
*/
type Unary = ( key: any ) => boolean;

/**
* Checks whether an iterated property passes a test.
*
* @param key - iteration key
* @param value - property value
* @returns boolean indicating whether an iterated property passes a test
*/
type Binary = ( key: any, value: any ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param key - iteration key
* @param value - property value
* @returns boolean indicating whether an iterated property passes a test
*/
type Predicate = Nullary | Unary | Binary;

/**
* Returns a partial object copy containing properties for which a predicate returns a truthy value.
*
* @param obj - source object
* @param predicate - predicate function
* @returns new object
*
* @example
* function predicate( key, value ) {
*     return ( value > 1 );
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = pickBy( obj1, predicate );
* // returns { 'b': 2 }
*/
declare function pickBy( obj: any, predicate: Predicate ): Object;


// EXPORTS //

export = pickBy;
