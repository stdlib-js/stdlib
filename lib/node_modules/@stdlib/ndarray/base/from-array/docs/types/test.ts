/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import zeros = require( '@stdlib/array/zeros' );
import array2ndarray = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	array2ndarray( zeros( 1, 'float64' ), 'row-major' ); // $ExpectType float64ndarray
	array2ndarray( zeros( 1, 'float32' ), 'row-major' ); // $ExpectType float32ndarray
	array2ndarray( zeros( 1, 'complex128' ), 'row-major' ); // $ExpectType complex128ndarray
	array2ndarray( zeros( 1, 'complex64' ), 'row-major' ); // $ExpectType complex64ndarray
	array2ndarray( zeros( 1, 'int32' ), 'row-major' ); // $ExpectType int32ndarray
	array2ndarray( zeros( 1, 'int16' ), 'row-major' ); // $ExpectType int16ndarray
	array2ndarray( zeros( 1, 'int8' ), 'row-major' ); // $ExpectType int8ndarray
	array2ndarray( zeros( 1, 'uint32' ), 'row-major' ); // $ExpectType uint32ndarray
	array2ndarray( zeros( 1, 'uint16' ), 'row-major' ); // $ExpectType uint16ndarray
	array2ndarray( zeros( 1, 'uint8' ), 'row-major' ); // $ExpectType uint8ndarray
	array2ndarray( zeros( 1, 'uint8c' ), 'row-major' ); // $ExpectType uint8cndarray
	array2ndarray( zeros( 1, 'generic' ), 'row-major' ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a third argument which is not a recognized/supported order...
{
	array2ndarray( zeros( 1, 'float64' ), '10' ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), 5 ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), false ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), true ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), null ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), [] ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), {} ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	array2ndarray(); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ) ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ) ); // $ExpectError
	array2ndarray( zeros( 1, 'float64' ), 'row-major', {} ); // $ExpectError
}
