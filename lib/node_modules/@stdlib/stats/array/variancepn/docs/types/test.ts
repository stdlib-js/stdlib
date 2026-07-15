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
import variancepn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	variancepn( x ); // $ExpectType number
	variancepn( new AccessorArray( x ) ); // $ExpectType number

	variancepn( x, 1.0 ); // $ExpectType number
	variancepn( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	variancepn( 10 ); // $ExpectError
	variancepn( '10' ); // $ExpectError
	variancepn( true ); // $ExpectError
	variancepn( false ); // $ExpectError
	variancepn( null ); // $ExpectError
	variancepn( undefined ); // $ExpectError
	variancepn( {} ); // $ExpectError
	variancepn( ( x: number ): number => x ); // $ExpectError

	variancepn( 10, 1.0 ); // $ExpectError
	variancepn( '10', 1.0 ); // $ExpectError
	variancepn( true, 1.0 ); // $ExpectError
	variancepn( false, 1.0 ); // $ExpectError
	variancepn( null, 1.0 ); // $ExpectError
	variancepn( undefined, 1.0 ); // $ExpectError
	variancepn( {}, 1.0 ); // $ExpectError
	variancepn( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn( x, '10' ); // $ExpectError
	variancepn( x, true ); // $ExpectError
	variancepn( x, false ); // $ExpectError
	variancepn( x, null ); // $ExpectError
	variancepn( x, [] ); // $ExpectError
	variancepn( x, {} ); // $ExpectError
	variancepn( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	variancepn(); // $ExpectError
	variancepn( x, 1.0, {} ); // $ExpectError
}
