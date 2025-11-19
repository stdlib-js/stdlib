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
import variancech = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	variancech( x ); // $ExpectType number
	variancech( new AccessorArray( x ) ); // $ExpectType number

	variancech( x, 1.0 ); // $ExpectType number
	variancech( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	variancech( 10 ); // $ExpectError
	variancech( '10' ); // $ExpectError
	variancech( true ); // $ExpectError
	variancech( false ); // $ExpectError
	variancech( null ); // $ExpectError
	variancech( undefined ); // $ExpectError
	variancech( {} ); // $ExpectError
	variancech( ( x: number ): number => x ); // $ExpectError

	variancech( 10, 1.0 ); // $ExpectError
	variancech( '10', 1.0 ); // $ExpectError
	variancech( true, 1.0 ); // $ExpectError
	variancech( false, 1.0 ); // $ExpectError
	variancech( null, 1.0 ); // $ExpectError
	variancech( undefined, 1.0 ); // $ExpectError
	variancech( {}, 1.0 ); // $ExpectError
	variancech( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancech( x, '10' ); // $ExpectError
	variancech( x, true ); // $ExpectError
	variancech( x, false ); // $ExpectError
	variancech( x, null ); // $ExpectError
	variancech( x, [] ); // $ExpectError
	variancech( x, {} ); // $ExpectError
	variancech( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	variancech(); // $ExpectError
	variancech( x, 1.0, {} ); // $ExpectError
}
