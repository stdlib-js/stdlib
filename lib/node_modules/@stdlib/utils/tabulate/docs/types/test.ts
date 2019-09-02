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
* WITHOUT WARRANTIES OR CONDITIONS OF tabulate KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import tabulate = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	tabulate( [ 'beep', 'boop', 'foo', 'beep' ] ); // $ExpectType Array<Array<any>>
	tabulate( [ false, true ] ); // $ExpectType Array<Array<any>>
	tabulate( [ 0, 1, 1, 2, 5 ] ); // $ExpectType Array<Array<any>>
	tabulate( [ true, true ] ); // $ExpectType Array<Array<any>>
	tabulate( [] ); // $ExpectType Array<Array<any>>
}

// The compiler throws an error if the function is provided a value other than a collection...
{
	tabulate( true ); // $ExpectError
	tabulate( false ); // $ExpectError
	tabulate( 5 ); // $ExpectError
}

// The compiler throws an error if the function is not provided one argument...
{
	tabulate(); // $ExpectError
	tabulate( [ true, true ], 1 ); // $ExpectError
}
