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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import minBy = require( './index' );

/**
* Accessor function.
*
* @returns accessed value
*/
function accessor(): number {
	return 5.0;
}


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	minBy( x, accessor ); // $ExpectType number
	minBy( new AccessorArray( x ), accessor ); // $ExpectType number

	minBy( x, accessor, {} ); // $ExpectType number
	minBy( new AccessorArray( x ), accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	minBy( 10, accessor ); // $ExpectError
	minBy( true, accessor ); // $ExpectError
	minBy( false, accessor ); // $ExpectError
	minBy( null, accessor ); // $ExpectError
	minBy( undefined, accessor ); // $ExpectError
	minBy( {}, accessor ); // $ExpectError
	minBy( ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	const x = new Float64Array( 10 );

	minBy( x, '10' ); // $ExpectError
	minBy( x, true ); // $ExpectError
	minBy( x, false ); // $ExpectError
	minBy( x, null ); // $ExpectError
	minBy( x, undefined ); // $ExpectError
	minBy( x, [] ); // $ExpectError
	minBy( x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	minBy(); // $ExpectError
	minBy( x ); // $ExpectError
	minBy( x, accessor, {}, 10 ); // $ExpectError
}
