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
* Tests if a value is a 1-dimensional ndarray-like object.
*
* @param v - value to test
* @returns boolean indicating if a value is a 1-dimensional ndarray-like object
*
* @example
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 4 ], [ 1 ], 0, 'row-major' );
* var bool = isVectorLike( arr );
* // returns true
*
* bool = isVectorLike( [] );
* // returns false
*/
declare function isVectorLike( v: any ): boolean;


// EXPORTS //

export = isVectorLike;
