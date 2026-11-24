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
import nanmskrange = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	nanmskrange( x, mask ); // $ExpectType number
	nanmskrange( new AccessorArray( x ), mask ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	const mask = new Uint8Array( 10 );

	nanmskrange( 10, mask ); // $ExpectError
	nanmskrange( '10', mask ); // $ExpectError
	nanmskrange( true, mask ); // $ExpectError
	nanmskrange( false, mask ); // $ExpectError
	nanmskrange( null, mask ); // $ExpectError
	nanmskrange( undefined, mask ); // $ExpectError
	nanmskrange( {}, mask ); // $ExpectError
	nanmskrange( ( x: number ): number => x, mask ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanmskrange( x, 10 ); // $ExpectError
	nanmskrange( x, '10' ); // $ExpectError
	nanmskrange( x, true ); // $ExpectError
	nanmskrange( x, false ); // $ExpectError
	nanmskrange( x, null ); // $ExpectError
	nanmskrange( x, undefined ); // $ExpectError
	nanmskrange( x, {} ); // $ExpectError
	nanmskrange( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	nanmskrange(); // $ExpectError
	nanmskrange( x, {} ); // $ExpectError
	nanmskrange( x, mask, {} ); // $ExpectError
}
