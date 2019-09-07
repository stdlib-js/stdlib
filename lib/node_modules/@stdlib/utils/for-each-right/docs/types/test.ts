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

import forEachRight = require( './index' );

const log = ( v: any, index: number ): void => {
	console.log( `${index}: ${v}` );
};

// TESTS //

// The function returns a collection...
{
	forEachRight( [ 0, 1, 1 ], log ); // $ExpectType Collection
	forEachRight( [ -1, 1, 2 ], log, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	forEachRight( 2, log ); // $ExpectError
	forEachRight( false, log ); // $ExpectError
	forEachRight( true, log ); // $ExpectError
	forEachRight( {}, log ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	forEachRight( [ 1, 2, 3 ], 2 ); // $ExpectError
	forEachRight( [ 1, 2, 3 ], false ); // $ExpectError
	forEachRight( [ 1, 2, 3 ], true ); // $ExpectError
	forEachRight( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	forEachRight( [ 1, 2, 3 ], {} ); // $ExpectError
	forEachRight( [ 1, 2, 3 ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	forEachRight(); // $ExpectError
	forEachRight( [ 1, 2, 3 ] ); // $ExpectError
	forEachRight( [ 1, 2, 3 ], log, {}, 3 ); // $ExpectError
}
