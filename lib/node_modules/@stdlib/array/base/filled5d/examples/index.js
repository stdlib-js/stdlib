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

var filled5d = require( './../lib' );

var out = filled5d( 0.0, [ 1, 1, 1, 1, 3 ] );
console.log( out );
// => [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ]

out = filled5d( 'beep', [ 1, 1, 1, 3, 1 ] );
console.log( out );
// => [ [ [ [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ] ] ] ]

out = filled5d( null, [ 1, 1, 1, 1, 3 ] );
console.log( out );
// => [ [ [ [ [ null, null, null ] ] ] ] ]

out = filled5d( true, [ 1, 1, 1, 3, 1 ] );
console.log( out );
// => [ [ [ [ [ true ], [ true ], [ true ] ] ] ] ]

out = filled5d( void 0, [ 1, 1, 1, 1, 3 ] );
console.log( out );
// => [ [ [ [ [ undefined, undefined, undefined ] ] ] ] ]
