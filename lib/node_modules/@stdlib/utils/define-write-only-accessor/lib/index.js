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

/**
* Define a write-only accessor.
*
* @module @stdlib/utils/define-write-only-accessor
*
* @example
* var setWriteOnlyAccessor = require( '@stdlib/utils/define-write-only-accessor' );
*
* var obj = {};
* var val = '';
*
* function setter( v ) {
*     val = v;
* }
*
* setWriteOnlyAccessor( obj, 'foo', setter );
*
* obj.foo = 'beep';
*/

// MODULES //

var setWriteOnlyAccessor = require( './main.js' );


// EXPORTS //

module.exports = setWriteOnlyAccessor;
