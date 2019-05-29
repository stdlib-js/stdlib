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
* Returns an object's inherited property descriptors.
*
* ## Notes
*
* -   If provided `null` or `undefined`, the function returns an empty object.
* -   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, this function returns an empty object if provided `undefined` or `null`, rather than throwing an error.
*
* @param value - input object
* @param level - inheritance level
* @throws second argument must be a positive integer
* @returns inherited property descriptors
*
* @example
* var desc = inheritedPropertyDescriptors( [] );
* // returns {...}
*/
declare function inheritedPropertyDescriptors( value: any, level?: number ): Object;  // tslint:disable-line: max-line-length


// EXPORTS //

export = inheritedPropertyDescriptors;
