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
* Moves a property from one object to another object.
*
* ## Notes
*
* -   The property is deleted from the source object and the property's descriptor is preserved during transfer.
* -   If a source property is not configurable, the function throws an error, as the property cannot be deleted from the source object.
*
* @param source - source object
* @param prop - property to move
* @param target - target object
* @returns boolean indicating whether operation was successful
*
* @example
* var obj1 = { 'a': 'b' };
* var obj2 = {};
*
* var bool = moveProperty( obj1, 'a', obj2 );
* // returns true
*
* @example
* var obj1 = { 'a': 'b' };
* var obj2 = {};
*
* var bool = moveProperty( obj1, 'c', obj2 );
* // returns false
*/
declare function moveProperty( source: any, prop: string, target: any ): boolean; // tslint-disable-line max-line-length


// EXPORTS //

export = moveProperty;
