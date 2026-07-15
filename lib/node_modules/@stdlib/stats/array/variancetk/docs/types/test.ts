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
import variancetk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	variancetk( x ); // $ExpectType number
	variancetk( new AccessorArray( x ) ); // $ExpectType number

	variancetk( x, 1.0 ); // $ExpectType number
	variancetk( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	variancetk( 10 ); // $ExpectError
	variancetk( '10' ); // $ExpectError
	variancetk( true ); // $ExpectError
	variancetk( false ); // $ExpectError
	variancetk( null ); // $ExpectError
	variancetk( undefined ); // $ExpectError
	variancetk( {} ); // $ExpectError
	variancetk( ( x: number ): number => x ); // $ExpectError

	variancetk( 10, 1.0 ); // $ExpectError
	variancetk( '10', 1.0 ); // $ExpectError
	variancetk( true, 1.0 ); // $ExpectError
	variancetk( false, 1.0 ); // $ExpectError
	variancetk( null, 1.0 ); // $ExpectError
	variancetk( undefined, 1.0 ); // $ExpectError
	variancetk( {}, 1.0 ); // $ExpectError
	variancetk( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancetk( x, '10' ); // $ExpectError
	variancetk( x, true ); // $ExpectError
	variancetk( x, false ); // $ExpectError
	variancetk( x, null ); // $ExpectError
	variancetk( x, [] ); // $ExpectError
	variancetk( x, {} ); // $ExpectError
	variancetk( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	variancetk(); // $ExpectError
	variancetk( x, 1.0, {} ); // $ExpectError
}
