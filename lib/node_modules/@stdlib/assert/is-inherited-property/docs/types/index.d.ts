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
* Tests if an object has an inherited property.
*
* @param value - value to test
* @param property - property to test
* @returns boolean indicating if an object has an inherited property
*
* @example
* var obj = {
*     'boop': true
* };
*
* var bool = isInheritedProperty( obj, 'toString' );
* // returns true
*
* @example
* var obj = {
*     'boop': true
* };
*
* var bool = isInheritedProperty( obj, 'boop' );
* // returns false
*
* @example
* var obj = {
*     'boop': true
* };
*
* var bool = isInheritedProperty( obj, 'bap' );
* // returns false
*/
declare function isInheritedProperty( value: any, property: any ): boolean;


// EXPORTS //

export = isInheritedProperty;
