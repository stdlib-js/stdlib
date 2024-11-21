/**
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

/* eslint-disable object-curly-newline */

'use strict';

var log = require( './../lib' );

log( 'Hello, World!' );
log( 'Hello, %s!', 'World' );
log( '%d', 1 );
log( '%.2d', 1.1 );
log( '%i', 2 );
log( '%.2i', 2.2 );
log( '%f', 3.14 );
log( '%.2f', 4.13 );
log( '%o', { 'foo': 'bar' } );
log( '%O', [ 1, 2, 3, 4 ] );
