/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import sparsearray2iteratorRight = require( './index' );

/**
* Multiplies a value by 10.
*
* @param v - iterated value
* @returns new value
*/
function times10( v: number ): number {
	return v * 10.0;
}


// TESTS //

// The function returns an iterator...
{
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ] ); // $ExpectType Iterator
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], times10 ); // $ExpectType Iterator
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], times10, {} ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	sparsearray2iteratorRight( 123 );  // $ExpectError
	sparsearray2iteratorRight( true ); // $ExpectError
	sparsearray2iteratorRight( false ); // $ExpectError
	sparsearray2iteratorRight( {} ); // $ExpectError
	sparsearray2iteratorRight( null ); // $ExpectError
	sparsearray2iteratorRight( undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a map function...
{
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], 'abc' ); // $ExpectError
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], 123 ); // $ExpectError
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], [] ); // $ExpectError
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], {} ); // $ExpectError
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], true ); // $ExpectError
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], false ); // $ExpectError
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sparsearray2iteratorRight(); // $ExpectError
	sparsearray2iteratorRight( [ 1, 2, 3, 4 ], times10, {}, 123 ); // $ExpectError
}
