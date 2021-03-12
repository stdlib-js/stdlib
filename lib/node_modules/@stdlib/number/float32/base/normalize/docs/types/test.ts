/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import normalizef = require( './index' );
import toFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// TESTS //

// The function returns an array...
{
	normalizef( toFloat32( 1.401e-45 ) ); // $ExpectType ArrayLike<number>
	const out = [ 0.0, 0 ];
	normalizef( out, toFloat32( 1.401e-45 ) ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a last argument that is not a number...
{
	normalizef( '5' ); // $ExpectError
	normalizef( true ); // $ExpectError
	normalizef( false ); // $ExpectError
	normalizef( null ); // $ExpectError
	normalizef( {} ); // $ExpectError
	normalizef( ( x: number ): number => x ); // $ExpectError

	const out = [ 0.0, 0 ];
	normalizef( out, '5' ); // $ExpectError
	normalizef( out, true ); // $ExpectError
	normalizef( out, false ); // $ExpectError
	normalizef( out, null ); // $ExpectError
	normalizef( out, {} ); // $ExpectError
	normalizef( out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array that is not an array-like object of numbers...
{
	normalizef( '5', toFloat32( 1.401e-45 ) ); // $ExpectError
	normalizef( true, toFloat32( 1.401e-45 ) ); // $ExpectError
	normalizef( false, toFloat32( 1.401e-45 ) ); // $ExpectError
	normalizef( null, toFloat32( 1.401e-45 ) ); // $ExpectError
	normalizef( {}, toFloat32( 1.401e-45 ) ); // $ExpectError
	normalizef( ( x: number ): number => x, toFloat32( 1.401e-45 ) ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	normalizef(); // $ExpectError
}
