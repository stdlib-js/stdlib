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

import tryRequire = require( './index' );

// TESTS //

// The function returns an exported value or an error...
{
	tryRequire( 'beep' ); // $ExpectType any
	tryRequire( 'fs' ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument other than a string...
{
	tryRequire( 5 ); // $ExpectError
	tryRequire( [] ); // $ExpectError
	tryRequire( {} ); // $ExpectError
	tryRequire( true ); // $ExpectError
	tryRequire( false ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	tryRequire(); // $ExpectError
	tryRequire( 'beep', 'boop' ); // $ExpectError
}
