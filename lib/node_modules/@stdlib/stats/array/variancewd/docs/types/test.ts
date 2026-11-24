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
import variancewd = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	variancewd( x ); // $ExpectType number
	variancewd( new AccessorArray( x ) ); // $ExpectType number

	variancewd( x, 1.0 ); // $ExpectType number
	variancewd( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	variancewd( 10 ); // $ExpectError
	variancewd( '10' ); // $ExpectError
	variancewd( true ); // $ExpectError
	variancewd( false ); // $ExpectError
	variancewd( null ); // $ExpectError
	variancewd( undefined ); // $ExpectError
	variancewd( {} ); // $ExpectError
	variancewd( ( x: number ): number => x ); // $ExpectError

	variancewd( 10, 1.0 ); // $ExpectError
	variancewd( '10', 1.0 ); // $ExpectError
	variancewd( true, 1.0 ); // $ExpectError
	variancewd( false, 1.0 ); // $ExpectError
	variancewd( null, 1.0 ); // $ExpectError
	variancewd( undefined, 1.0 ); // $ExpectError
	variancewd( {}, 1.0 ); // $ExpectError
	variancewd( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancewd( x, '10' ); // $ExpectError
	variancewd( x, true ); // $ExpectError
	variancewd( x, false ); // $ExpectError
	variancewd( x, null ); // $ExpectError
	variancewd( x, [] ); // $ExpectError
	variancewd( x, {} ); // $ExpectError
	variancewd( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	variancewd(); // $ExpectError
	variancewd( x, 1.0, {} ); // $ExpectError
}
