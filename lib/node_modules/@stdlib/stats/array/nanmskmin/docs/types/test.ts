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
import nanmskmin = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	nanmskmin( x, mask ); // $ExpectType number
	nanmskmin( new AccessorArray( x ), mask ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	const mask = new Uint8Array( 10 );

	nanmskmin( 10, mask ); // $ExpectError
	nanmskmin( '10', mask ); // $ExpectError
	nanmskmin( true, mask ); // $ExpectError
	nanmskmin( false, mask ); // $ExpectError
	nanmskmin( null, mask ); // $ExpectError
	nanmskmin( undefined, mask ); // $ExpectError
	nanmskmin( {}, mask ); // $ExpectError
	nanmskmin( ( x: number ): number => x, mask ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanmskmin( x, 10 ); // $ExpectError
	nanmskmin( x, '10' ); // $ExpectError
	nanmskmin( x, true ); // $ExpectError
	nanmskmin( x, false ); // $ExpectError
	nanmskmin( x, null ); // $ExpectError
	nanmskmin( x, undefined ); // $ExpectError
	nanmskmin( x, {} ); // $ExpectError
	nanmskmin( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	nanmskmin(); // $ExpectError
	nanmskmin( x, {} ); // $ExpectError
	nanmskmin( x, mask, {} ); // $ExpectError
}
