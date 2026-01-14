/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

'use strict';

var constantFunction = require( '@stdlib/utils/constant-function' );
var filledndBy = require( './../lib' );

var out = filledndBy( [ 1, 3 ], constantFunction( 0.0 ) );
console.log( out );
// => [ [ 0.0, 0.0, 0.0 ] ]

out = filledndBy( [ 3, 1 ], constantFunction( 'beep' ) );
console.log( out );
// => [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ]

out = filledndBy( [ 1, 1, 3 ], constantFunction( null ) );
console.log( out );
// => [ [ [ null, null, null ] ] ]

out = filledndBy( [ 1, 3, 1 ], constantFunction( true ) );
console.log( out );
// => [ [ [ true ], [ true ], [ true ] ] ]

out = filledndBy( [ 1, 1, 1, 3 ], constantFunction( void 0 ) );
console.log( out );
// => [ [ [ [ undefined, undefined, undefined ] ] ] ]
