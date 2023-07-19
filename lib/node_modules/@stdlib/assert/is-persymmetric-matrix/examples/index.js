/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var ndarray = require( '@stdlib/ndarray/ctor' );
var isPersymmetricMatrix = require( './../lib' );

var arr = ndarray( 'generic', [ 1, 2, 3, 1 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
console.log( isPersymmetricMatrix( arr ) );
// => true

console.log( isPersymmetricMatrix( [ 1, 2, 3, 4 ] ) );
// => false

console.log( isPersymmetricMatrix( {} ) );
// => false

console.log( isPersymmetricMatrix( null ) );
// => false
