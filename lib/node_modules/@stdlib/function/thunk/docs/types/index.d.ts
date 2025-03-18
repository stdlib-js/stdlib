/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/**
* Returns a thunk.
*
* @param fcn - function to convert to a thunk
* @param args - function args
* @returns thunk
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
*
* var f = thunk( add, 2, 3 );
* // returns <Function>
*
* // ...
*
* // Evaluate the thunk:
* var v = f();
* // returns 5
*/
declare function thunk<T extends Array<any>, U>( fcn: ( ...args: T ) => U, ...args: T ): () => U;


// EXPORTS //

export = thunk;
