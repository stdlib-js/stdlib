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
import varianceyc = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	varianceyc( x ); // $ExpectType number
	varianceyc( new AccessorArray( x ) ); // $ExpectType number

	varianceyc( x, 1.0 ); // $ExpectType number
	varianceyc( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	varianceyc( 10 ); // $ExpectError
	varianceyc( '10' ); // $ExpectError
	varianceyc( true ); // $ExpectError
	varianceyc( false ); // $ExpectError
	varianceyc( null ); // $ExpectError
	varianceyc( undefined ); // $ExpectError
	varianceyc( {} ); // $ExpectError
	varianceyc( ( x: number ): number => x ); // $ExpectError

	varianceyc( 10, 1.0 ); // $ExpectError
	varianceyc( '10', 1.0 ); // $ExpectError
	varianceyc( true, 1.0 ); // $ExpectError
	varianceyc( false, 1.0 ); // $ExpectError
	varianceyc( null, 1.0 ); // $ExpectError
	varianceyc( undefined, 1.0 ); // $ExpectError
	varianceyc( {}, 1.0 ); // $ExpectError
	varianceyc( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	varianceyc( x, '10' ); // $ExpectError
	varianceyc( x, true ); // $ExpectError
	varianceyc( x, false ); // $ExpectError
	varianceyc( x, null ); // $ExpectError
	varianceyc( x, [] ); // $ExpectError
	varianceyc( x, {} ); // $ExpectError
	varianceyc( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	varianceyc(); // $ExpectError
	varianceyc( x, 1.0, {} ); // $ExpectError
}
