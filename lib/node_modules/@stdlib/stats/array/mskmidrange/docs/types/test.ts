/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
import mskmidrange = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskmidrange( x, mask ); // $ExpectType number
	mskmidrange( new AccessorArray( x ), mask ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	const mask = new Uint8Array( 10 );

	mskmidrange( 10, mask ); // $ExpectError
	mskmidrange( '10', mask ); // $ExpectError
	mskmidrange( true, mask ); // $ExpectError
	mskmidrange( false, mask ); // $ExpectError
	mskmidrange( null, mask ); // $ExpectError
	mskmidrange( undefined, mask ); // $ExpectError
	mskmidrange( {}, mask ); // $ExpectError
	mskmidrange( ( x: number ): number => x, mask ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	mskmidrange( x, 10 ); // $ExpectError
	mskmidrange( x, '10' ); // $ExpectError
	mskmidrange( x, true ); // $ExpectError
	mskmidrange( x, false ); // $ExpectError
	mskmidrange( x, null ); // $ExpectError
	mskmidrange( x, undefined ); // $ExpectError
	mskmidrange( x, {} ); // $ExpectError
	mskmidrange( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskmidrange(); // $ExpectError
	mskmidrange( x ); // $ExpectError
	mskmidrange( x, mask, {} ); // $ExpectError
}
