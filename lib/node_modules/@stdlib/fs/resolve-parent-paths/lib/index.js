/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Resolve paths from a set of paths by walking parent directories.
*
* @module @stdlib/fs/resolve-parent-paths
*
* @example
* var resolveParentPaths = require( '@stdlib/fs/resolve-parent-paths' );
*
* resolveParentPaths( [ 'package.json', 'package-lock.json' ], onPaths );
*
* function onPaths( error, paths ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( paths );
* }
*
* @example
* var resolveParentPaths = require( '@stdlib/fs/resolve-parent-paths' );
*
* var paths = resolveParentPaths.sync( [ 'package.json', 'package-lock.json' ] );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( main, 'sync', sync );


// EXPORTS //

module.exports = main;

// exports: { "sync": "main.sync" }
