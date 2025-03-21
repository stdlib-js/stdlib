/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import forEach = require( './index' );

/**
* Dummy function.
*/
function fcn( v: any, index: number ): number {
	if ( v !== v ) {
		throw new Error( 'beep' );
	}
	return index;
}


// TESTS //

// The function returns a collection...
{
	forEach( [ 0, 1, 1 ], fcn ); // $ExpectType Collection<number>
	forEach( [ -1, 1, 2 ], fcn, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	forEach( 2, fcn ); // $ExpectError
	forEach( false, fcn ); // $ExpectError
	forEach( true, fcn ); // $ExpectError
	forEach( {}, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	forEach( [ 1, 2, 3 ], 2 ); // $ExpectError
	forEach( [ 1, 2, 3 ], false ); // $ExpectError
	forEach( [ 1, 2, 3 ], true ); // $ExpectError
	forEach( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	forEach( [ 1, 2, 3 ], {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	forEach(); // $ExpectError
	forEach( [ 1, 2, 3 ] ); // $ExpectError
	forEach( [ 1, 2, 3 ], fcn, {}, 3 ); // $ExpectError
}
