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
import mskmax = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskmax( x, mask ); // $ExpectType number
	mskmax( new AccessorArray( x ), mask ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	const mask = new Uint8Array( 10 );

	mskmax( 10, mask ); // $ExpectError
	mskmax( '10', mask ); // $ExpectError
	mskmax( true, mask ); // $ExpectError
	mskmax( false, mask ); // $ExpectError
	mskmax( null, mask ); // $ExpectError
	mskmax( undefined, mask ); // $ExpectError
	mskmax( {}, mask ); // $ExpectError
	mskmax( ( x: number ): number => x, mask ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	mskmax( x, 10 ); // $ExpectError
	mskmax( x, '10' ); // $ExpectError
	mskmax( x, true ); // $ExpectError
	mskmax( x, false ); // $ExpectError
	mskmax( x, null ); // $ExpectError
	mskmax( x, undefined ); // $ExpectError
	mskmax( x, {} ); // $ExpectError
	mskmax( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskmax(); // $ExpectError
	mskmax( x ); // $ExpectError
	mskmax( x, mask, {} ); // $ExpectError
}
