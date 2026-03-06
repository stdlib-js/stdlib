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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace streams
*/
var streams = {};

/**
* @name debugStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/debug}
*/
setReadOnly( streams, 'debugStream', require( '@stdlib/streams/node/debug' ) );

/**
* @name debugSinkStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/debug-sink}
*/
setReadOnly( streams, 'debugSinkStream', require( '@stdlib/streams/node/debug-sink' ) );

/**
* @name emptyStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/empty}
*/
setReadOnly( streams, 'emptyStream', require( '@stdlib/streams/node/empty' ) );

/**
* @name arrayStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/from-array}
*/
setReadOnly( streams, 'arrayStream', require( '@stdlib/streams/node/from-array' ) );

/**
* @name circularArrayStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/from-circular-array}
*/
setReadOnly( streams, 'circularArrayStream', require( '@stdlib/streams/node/from-circular-array' ) );

/**
* @name constantStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/from-constant}
*/
setReadOnly( streams, 'constantStream', require( '@stdlib/streams/node/from-constant' ) );

/**
* @name iteratorStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/from-iterator}
*/
setReadOnly( streams, 'iteratorStream', require( '@stdlib/streams/node/from-iterator' ) );

/**
* @name stridedArrayStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/from-strided-array}
*/
setReadOnly( streams, 'stridedArrayStream', require( '@stdlib/streams/node/from-strided-array' ) );

/**
* @name inspectStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/inspect}
*/
setReadOnly( streams, 'inspectStream', require( '@stdlib/streams/node/inspect' ) );

/**
* @name inspectSinkStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/inspect-sink}
*/
setReadOnly( streams, 'inspectSinkStream', require( '@stdlib/streams/node/inspect-sink' ) );

/**
* @name joinStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/join}
*/
setReadOnly( streams, 'joinStream', require( '@stdlib/streams/node/join' ) );

/**
* @name splitStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/split}
*/
setReadOnly( streams, 'splitStream', require( '@stdlib/streams/node/split' ) );

/**
* @name stderr
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/stderr}
*/
setReadOnly( streams, 'stderr', require( '@stdlib/streams/node/stderr' ) );

/**
* @name stdin
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/stdin}
*/
setReadOnly( streams, 'stdin', require( '@stdlib/streams/node/stdin' ) );

/**
* @name stdout
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/stdout}
*/
setReadOnly( streams, 'stdout', require( '@stdlib/streams/node/stdout' ) );

/**
* @name transformStream
* @memberof streams
* @readonly
* @type {Function}
* @see {@link module:@stdlib/streams/node/transform}
*/
setReadOnly( streams, 'transformStream', require( '@stdlib/streams/node/transform' ) );


// EXPORTS //

module.exports = streams;
