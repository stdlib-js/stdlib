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
import nanmskmax = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	nanmskmax( x, mask ); // $ExpectType number
	nanmskmax( new AccessorArray( x ), mask ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	const mask = new Uint8Array( 10 );

	nanmskmax( 10, mask ); // $ExpectError
	nanmskmax( '10', mask ); // $ExpectError
	nanmskmax( true, mask ); // $ExpectError
	nanmskmax( false, mask ); // $ExpectError
	nanmskmax( null, mask ); // $ExpectError
	nanmskmax( undefined, mask ); // $ExpectError
	nanmskmax( {}, mask ); // $ExpectError
	nanmskmax( ( x: number ): number => x, mask ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanmskmax( x, 10 ); // $ExpectError
	nanmskmax( x, '10' ); // $ExpectError
	nanmskmax( x, true ); // $ExpectError
	nanmskmax( x, false ); // $ExpectError
	nanmskmax( x, null ); // $ExpectError
	nanmskmax( x, undefined ); // $ExpectError
	nanmskmax( x, {} ); // $ExpectError
	nanmskmax( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	nanmskmax(); // $ExpectError
	nanmskmax( x, {} ); // $ExpectError
	nanmskmax( x, mask, {} ); // $ExpectError
}
