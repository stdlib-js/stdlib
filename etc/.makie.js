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

// MODULES //

var path = require( 'path' );


// VARIABLES //

var prefix = path.resolve( __dirname, '../tools/makie/plugins' );


// MAIN //

var config = {};
var plugins = {};

config.plugins = plugins;

plugins[ 'benchmark' ] = path.join( prefix, 'makie-benchmark' );
plugins[ 'benchmark-lang' ] = path.join( prefix, 'makie-benchmark-lang' );
plugins[ 'complexity' ] = path.join( prefix, 'makie-complexity' );
plugins[ 'examples' ] = path.join( prefix, 'makie-examples' );
plugins[ 'install-node-addons' ] = path.join( prefix, 'makie-install-node-addons' );
plugins[ 'lint-javascript' ] = path.join( prefix, 'makie-lint-javascript' );
plugins[ 'lint-markdown' ] = path.join( prefix, 'makie-lint-markdown' );
plugins[ 'lint-python' ] = path.join( prefix, 'makie-lint-python' );
plugins[ 'lint-r' ] = path.join( prefix, 'makie-lint-r' );
plugins[ 'list-pkgs' ] = path.join( prefix, 'makie-list-pkgs' );
plugins[ 'list-pkgs-names' ] = path.join( prefix, 'makie-list-pkgs-names' );
plugins[ 'markdown-asset-link' ] = path.join( prefix, 'makie-markdown-asset-link' );
plugins[ 'notes' ] = path.join( prefix, 'makie-notes' );
plugins[ 'repl' ] = path.join( prefix, 'makie-repl' );
plugins[ 'stats-list-contributors' ] = path.join( prefix, 'makie-stats-list-contributors' );
plugins[ 'test' ] = path.join( prefix, 'makie-test' );
plugins[ 'test-summary' ] = path.join( prefix, 'makie-test-summary' );
plugins[ 'test-cov' ] = path.join( prefix, 'makie-test-cov' );
plugins[ 'view-complexity' ] = path.join( prefix, 'makie-view-complexity' );
plugins[ 'view-cov' ] = path.join( prefix, 'makie-view-cov' );
plugins[ 'wasm' ] = path.join( prefix, 'makie-wasm' );


// EXPORTS //

module.exports = config;
