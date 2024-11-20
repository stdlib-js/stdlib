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

import offsetView = require( './index' );


// TESTS //

// The function returns a typed array...
{
	offsetView( new Float64Array( 10 ), 0 ); // $ExpectType TypedArrayOrComplexTypedArray
}

// The compiler throws an error if not provided a first argument which is a typed array...
{
	offsetView( '10', 0 ); // $ExpectError
	offsetView( 10, 0 ); // $ExpectError
	offsetView( true, 0 ); // $ExpectError
	offsetView( false, 0 ); // $ExpectError
	offsetView( null, 0 ); // $ExpectError
	offsetView( undefined, 0 ); // $ExpectError
	offsetView( [], 0 ); // $ExpectError
	offsetView( {}, 0 ); // $ExpectError
	offsetView( ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a number...
{
	const x = new Float64Array( 10 );

	offsetView( x, '10' ); // $ExpectError
	offsetView( x, true ); // $ExpectError
	offsetView( x, false ); // $ExpectError
	offsetView( x, null ); // $ExpectError
	offsetView( x, undefined ); // $ExpectError
	offsetView( x, [] ); // $ExpectError
	offsetView( x, {} ); // $ExpectError
	offsetView( x, ( x: number ): number => x ); // $ExpectError
}
