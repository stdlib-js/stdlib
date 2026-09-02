/**
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

'use strict';

var linspace2d = require( './../lib' );

var out = linspace2d( 0, 10, [ 2, 5 ], false );
console.log( out );

out = linspace2d( 0, 10, [ 2, 3 ], true );
console.log( out );

out = linspace2d( 0, 10, [ 4, 2 ], true );
console.log( out );

// Create an array with decremented values:
out = linspace2d( 10, 0, [ 2, 5 ], false );
console.log( out );
