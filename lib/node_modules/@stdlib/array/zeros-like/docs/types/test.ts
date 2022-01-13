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

/// <reference types="@stdlib/types"/>

import zerosLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	zerosLike( [ 0, 0 ] ); // $ExpectType ArrayOrTypedArray
	zerosLike( [ 0, 0 ], 'float32' ); // $ExpectType ArrayOrTypedArray
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	zerosLike( '5' ); // $ExpectError
	zerosLike( 5 ); // $ExpectError
	zerosLike( false ); // $ExpectError
	zerosLike( true ); // $ExpectError
	zerosLike( null ); // $ExpectError
	zerosLike( undefined ); // $ExpectError
	zerosLike( {} ); // $ExpectError
	zerosLike( ( x: number ): number => x ); // $ExpectError

	zerosLike( '5', 'float32' ); // $ExpectError
	zerosLike( 5 'float32' ); // $ExpectError
	zerosLike( false, 'float32' ); // $ExpectError
	zerosLike( true, 'float32' ); // $ExpectError
	zerosLike( null, 'float32' ); // $ExpectError
	zerosLike( undefined, 'float32' ); // $ExpectError
	zerosLike( {}, 'float32' ); // $ExpectError
	zerosLike( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	zerosLike( [ 0, 0 ], '10' ); // $ExpectError
	zerosLike( [ 0, 0 ], 10 ); // $ExpectError
	zerosLike( [ 0, 0 ], false ); // $ExpectError
	zerosLike( [ 0, 0 ], true ); // $ExpectError
	zerosLike( [ 0, 0 ], null ); // $ExpectError
	zerosLike( [ 0, 0 ], [] ); // $ExpectError
	zerosLike( [ 0, 0 ], {} ); // $ExpectError
	zerosLike( [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zerosLike( [ 0, 0 ], 'float64', 1 ); // $ExpectError
}
