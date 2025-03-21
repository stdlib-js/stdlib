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

import setConfigurableReadOnly = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setConfigurableReadOnly( {}, 'foo', 'bar' ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setConfigurableReadOnly( {}, true, 'bar' ); // $ExpectError
	setConfigurableReadOnly( {}, false, 'bar' ); // $ExpectError
	setConfigurableReadOnly( {}, null, 'bar' ); // $ExpectError
	setConfigurableReadOnly( {}, undefined, 'bar' ); // $ExpectError
	setConfigurableReadOnly( {}, [], 'bar' ); // $ExpectError
	setConfigurableReadOnly( {}, {}, 'bar' ); // $ExpectError
	setConfigurableReadOnly( {}, ( x: number ): number => x, 'bar' ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setConfigurableReadOnly(); // $ExpectError
	setConfigurableReadOnly( {} ); // $ExpectError
	setConfigurableReadOnly( {}, 'foo' ); // $ExpectError
}
