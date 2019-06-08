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
* Returns a function which always returns a specified argument.
*
* ## Notes
*
* -   The input argument corresponds to the zero-based index of the argument to return.
*
* @param idx - argument index
* @throws must provide a nonnegative integer
* @returns argument function
*
* @example
* var argn = argumentFunction( 1 );
*
* var v = argn( 1.0, 2.0, 3.0 );
* // returns 2.0
*
* v = argn( 'a', 'b', 'c' );
* // returns 'b'
*
* v = argn( null );
* // returns undefined
*/
declare function argumentFunction( idx: number ): Function;


// EXPORTS //

export = argumentFunction;
