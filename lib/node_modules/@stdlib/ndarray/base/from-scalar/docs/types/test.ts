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

import scalar2ndarray = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	scalar2ndarray( 1.0, 'float64', 'row-major' ); // $ExpectType float64ndarray
	scalar2ndarray( 1.0, 'float32', 'row-major' ); // $ExpectType float32ndarray
	scalar2ndarray( 1.0, 'complex128', 'row-major' ); // $ExpectType complex128ndarray
	scalar2ndarray( 1.0, 'complex64', 'row-major' ); // $ExpectType complex64ndarray
	scalar2ndarray( 1.0, 'int32', 'row-major' ); // $ExpectType int32ndarray
	scalar2ndarray( 1.0, 'int16', 'row-major' ); // $ExpectType int16ndarray
	scalar2ndarray( 1.0, 'int8', 'row-major' ); // $ExpectType int8ndarray
	scalar2ndarray( 1.0, 'uint32', 'row-major' ); // $ExpectType uint32ndarray
	scalar2ndarray( 1.0, 'uint16', 'row-major' ); // $ExpectType uint16ndarray
	scalar2ndarray( 1.0, 'uint8', 'row-major' ); // $ExpectType uint8ndarray
	scalar2ndarray( 1.0, 'uint8c', 'row-major' ); // $ExpectType uint8cndarray
	scalar2ndarray( 1.0, 'generic', 'row-major' ); // $ExpectType ndarray
}

// The compiler throws an error if the function is provided a second argument which is not a recognized/supported data type...
{
	scalar2ndarray( 1.0, '10', 'row-major' ); // $ExpectError
	scalar2ndarray( 1.0, 5, 'row-major' ); // $ExpectError
	scalar2ndarray( 1.0, false, 'row-major' ); // $ExpectError
	scalar2ndarray( 1.0, true, 'row-major' ); // $ExpectError
	scalar2ndarray( 1.0, null, 'row-major' ); // $ExpectError
	scalar2ndarray( 1.0, [], 'row-major' ); // $ExpectError
	scalar2ndarray( 1.0, {}, 'row-major' ); // $ExpectError
	scalar2ndarray( 1.0, ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a recognized/supported order...
{
	scalar2ndarray( 1.0, 'float64', '10' ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', 5 ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', false ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', true ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', null ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', [] ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', {} ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	scalar2ndarray(); // $ExpectError
	scalar2ndarray( 1.0 ); // $ExpectError
	scalar2ndarray( 1.0, 'float64' ); // $ExpectError
	scalar2ndarray( 1.0, 'float64', 'row-major', 1 ); // $ExpectError
}
