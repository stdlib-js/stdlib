/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import filledndBy = require( './index' );

/**
* Callback function.
*
* @param indices - array element indices
* @returns return value
*/
function clbk( indices: Array<number> ): number {
	return indices[ 1 ];
}


// TESTS //

// The function returns a nested array...
{
	filledndBy( [ 3 ], clbk ); // $ExpectType Array1D<number>
	filledndBy( [ 1, 3 ], clbk ); // $ExpectType Array2D<number>
	filledndBy( [ 1, 1, 3 ], clbk ); // $ExpectType Array3D<number>
	filledndBy( [ 1, 1, 1, 3 ], clbk ); // $ExpectType Array4D<number>
	filledndBy( [ 1, 1, 1, 1, 3 ], clbk ); // $ExpectType Array5D<number>

	filledndBy( [ 3 ], clbk, {} ); // $ExpectType Array1D<number>
	filledndBy( [ 1, 3 ], clbk, {} ); // $ExpectType Array2D<number>
	filledndBy( [ 1, 1, 3 ], clbk, {} ); // $ExpectType Array3D<number>
	filledndBy( [ 1, 1, 1, 3 ], clbk, {} ); // $ExpectType Array4D<number>
	filledndBy( [ 1, 1, 1, 1, 3 ], clbk, {} ); // $ExpectType Array5D<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	filledndBy( 'abc', clbk ); // $ExpectError
	filledndBy( true, clbk ); // $ExpectError
	filledndBy( false, clbk ); // $ExpectError
	filledndBy( null, clbk ); // $ExpectError
	filledndBy( [ '1' ], clbk ); // $ExpectError
	filledndBy( {}, clbk ); // $ExpectError
	filledndBy( ( x: number ): number => x, clbk ); // $ExpectError

	filledndBy( 'abc', clbk, {} ); // $ExpectError
	filledndBy( true, clbk, {} ); // $ExpectError
	filledndBy( false, clbk, {} ); // $ExpectError
	filledndBy( null, clbk, {} ); // $ExpectError
	filledndBy( [ '1' ], clbk, {} ); // $ExpectError
	filledndBy( {}, clbk, {} ); // $ExpectError
	filledndBy( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid function...
{
	filledndBy( [ 2, 2 ], 'abc' ); // $ExpectError
	filledndBy( [ 2, 2 ], 1.0 ); // $ExpectError
	filledndBy( [ 2, 2 ], true ); // $ExpectError
	filledndBy( [ 2, 2 ], false ); // $ExpectError
	filledndBy( [ 2, 2 ], null ); // $ExpectError
	filledndBy( [ 2, 2 ], [ '1' ] ); // $ExpectError
	filledndBy( [ 2, 2 ], {} ); // $ExpectError

	filledndBy( [ 2, 2 ], 'abc', {} ); // $ExpectError
	filledndBy( [ 2, 2 ], 1.0, {} ); // $ExpectError
	filledndBy( [ 2, 2 ], true, {} ); // $ExpectError
	filledndBy( [ 2, 2 ], false, {} ); // $ExpectError
	filledndBy( [ 2, 2 ], null, {} ); // $ExpectError
	filledndBy( [ 2, 2 ], [ '1' ], {} ); // $ExpectError
	filledndBy( [ 2, 2 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	filledndBy(); // $ExpectError
	filledndBy( [ 1, 3 ] ); // $ExpectError
	filledndBy( [ 1, 3 ], clbk, {}, 2 ); // $ExpectError
}
