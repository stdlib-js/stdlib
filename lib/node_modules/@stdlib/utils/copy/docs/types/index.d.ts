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
* Copies or deep clones a value to an arbitrary depth.
*
* ## Notes
*
* -   The implementation can handle circular references.
* -   If a `Number`, `String`, or `Boolean` object is encountered, the value is cloned as a primitive. This behavior is intentional.
* -   For objects, the implementation only copies enumerable keys and their associated property descriptors.
* -   The implementation only checks whether basic `Objects`, `Arrays`, and class instances are extensible, sealed, and/or frozen.
* -   Functions are not cloned; their reference is copied.
* -   The implementation supports custom error types which are `Error` instances (e.g., ES2015 subclasses).
* -   Support for copying class instances is inherently fragile. Any instances with privileged access to variables (e.g., within closures) cannot be cloned. This stated, basic copying of class instances is supported. Provided an environment which supports ES5, the implementation is greedy and performs a deep clone of any arbitrary class instance and its properties. The implementation assumes that the concept of `level` applies only to the class instance reference, but not to its internal state.
*
* @param value - value to copy
* @param  level - copy depth (default: +infinity)
* @throws `level` must be a nonnegative integer
* @returns value copy
*
* @example
* var out = copy( 'beep' );
* // returns 'beep'
*
* @example
* var value = [
*     {
*         'a': 1,
*         'b': true,
*         'c': [ 1, 2, 3 ]
*     }
* ];
* var out = copy( value );
* // returns [ { 'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]
*
* var bool = ( value[0].c === out[0].c );
* // returns false
*/
declare function copy( value: any, level?: number ): any;


// EXPORTS //

export = copy;
