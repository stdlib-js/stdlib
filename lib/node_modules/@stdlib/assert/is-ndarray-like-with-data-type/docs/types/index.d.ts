/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Tests if a value is an ndarray-like object having a specified data type.
*
* @param v - value to test
* @param dtype - data type
* @returns boolean indicating if a value is an ndarray-like object having a specified data type
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isndarrayLikeWithDataType( arr, 'generic' );
* // returns true
*
* bool = isndarrayLikeWithDataType( [], 'generic' );
* // returns false
*/
declare function isndarrayLikeWithDataType( v: any, dtype: any ): boolean;


// EXPORTS //

export = isndarrayLikeWithDataType;
