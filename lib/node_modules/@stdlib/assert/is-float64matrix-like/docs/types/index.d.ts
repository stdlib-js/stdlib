/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Tests if a value is a 2-dimensional ndarray-like object whose underlying data type is `float64`.
*
* @param v - value to test
* @returns boolean indicating if a value is a 2-dimensional ndarray-like object whose underlying data type is `float64`
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* var arr = ndarray( 'float64', new Float64Array( [ 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isFloat64MatrixLike( arr );
* // returns true
*
* bool = isFloat64MatrixLike( [] );
* // returns false
*/
declare function isFloat64MatrixLike( v: any ): boolean;


// EXPORTS //

export = isFloat64MatrixLike;
