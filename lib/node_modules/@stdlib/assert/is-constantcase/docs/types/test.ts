/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import isConstantcase = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isConstantcase( 'BEEP_BOOP' ); // $ExpectType boolean
	isConstantcase( 'beep_boop' ); // $ExpectType boolean
	isConstantcase( 'BEEP-BOOP' ); // $ExpectType boolean
	isConstantcase( 'beep boop' ); // $ExpectType boolean
	isConstantcase( 'beep' ); // $ExpectType boolean
	isConstantcase( '' ); // $ExpectType boolean
	isConstantcase( null ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isConstantcase(); // $ExpectError
	isConstantcase( 'beep', 123 ); // $ExpectError
}
