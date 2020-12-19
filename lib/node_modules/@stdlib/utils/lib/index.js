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
* @namespace utils
*/
var utils = {};

/**
* @name any
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/any}
*/
setReadOnly( utils, 'any', require( '@stdlib/utils/any' ) );

/**
* @name anyBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/any-by}
*/
setReadOnly( utils, 'anyBy', require( '@stdlib/utils/any-by' ) );

/**
* @name anyByRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/any-by-right}
*/
setReadOnly( utils, 'anyByRight', require( '@stdlib/utils/any-by-right' ) );

/**
* @name append
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/append}
*/
setReadOnly( utils, 'append', require( '@stdlib/utils/append' ) );

/**
* @name argumentFunction
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/argument-function}
*/
setReadOnly( utils, 'argumentFunction', require( '@stdlib/utils/argument-function' ) );

/**
* @name async
* @memberof utils
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/utils/async}
*/
setReadOnly( utils, 'async', require( '@stdlib/utils/async' ) );

/**
* @name bifurcate
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/bifurcate}
*/
setReadOnly( utils, 'bifurcate', require( '@stdlib/utils/bifurcate' ) );

/**
* @name bifurcateBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/bifurcate-by}
*/
setReadOnly( utils, 'bifurcateBy', require( '@stdlib/utils/bifurcate-by' ) );

/**
* @name bifurcateIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/bifurcate-in}
*/
setReadOnly( utils, 'bifurcateIn', require( '@stdlib/utils/bifurcate-in' ) );

/**
* @name bifurcateOwn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/bifurcate-own}
*/
setReadOnly( utils, 'bifurcateOwn', require( '@stdlib/utils/bifurcate-own' ) );

/**
* @name capitalizeKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/capitalize-keys}
*/
setReadOnly( utils, 'capitalizeKeys', require( '@stdlib/utils/capitalize-keys' ) );

/**
* @name CircularBuffer
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/circular-buffer}
*/
setReadOnly( utils, 'CircularBuffer', require( '@stdlib/utils/circular-buffer' ) );

/**
* @name compose
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/compose}
*/
setReadOnly( utils, 'compose', require( '@stdlib/utils/compose' ) );

/**
* @name constantFunction
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/constant-function}
*/
setReadOnly( utils, 'constantFunction', require( '@stdlib/utils/constant-function' ) );

/**
* @name constructorName
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/constructor-name}
*/
setReadOnly( utils, 'constructorName', require( '@stdlib/utils/constructor-name' ) );

/**
* @name convertPath
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/convert-path}
*/
setReadOnly( utils, 'convertPath', require( '@stdlib/utils/convert-path' ) );

/**
* @name copy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/copy}
*/
setReadOnly( utils, 'copy', require( '@stdlib/utils/copy' ) );

/**
* @name countBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/count-by}
*/
setReadOnly( utils, 'countBy', require( '@stdlib/utils/count-by' ) );

/**
* @name curry
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/curry}
*/
setReadOnly( utils, 'curry', require( '@stdlib/utils/curry' ) );

/**
* @name curryRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/curry-right}
*/
setReadOnly( utils, 'curryRight', require( '@stdlib/utils/curry-right' ) );

/**
* @name deepGet
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/deep-get}
*/
setReadOnly( utils, 'deepGet', require( '@stdlib/utils/deep-get' ) );

/**
* @name deepPluck
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/deep-pluck}
*/
setReadOnly( utils, 'deepPluck', require( '@stdlib/utils/deep-pluck' ) );

/**
* @name deepSet
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/deep-set}
*/
setReadOnly( utils, 'deepSet', require( '@stdlib/utils/deep-set' ) );

/**
* @name setConfigurableReadOnlyAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-configurable-read-only-accessor}
*/
setReadOnly( utils, 'setConfigurableReadOnlyAccessor', require( '@stdlib/utils/define-configurable-read-only-accessor' ) );

/**
* @name setConfigurableReadOnly
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-configurable-read-only-property}
*/
setReadOnly( utils, 'setConfigurableReadOnly', require( '@stdlib/utils/define-configurable-read-only-property' ) );

/**
* @name setConfigurableReadWriteAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-configurable-read-write-accessor}
*/
setReadOnly( utils, 'setConfigurableReadWriteAccessor', require( '@stdlib/utils/define-configurable-read-write-accessor' ) );

/**
* @name setConfigurableWriteOnlyAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-configurable-write-only-accessor}
*/
setReadOnly( utils, 'setConfigurableWriteOnlyAccessor', require( '@stdlib/utils/define-configurable-write-only-accessor' ) );

/**
* @name setMemoizedConfigurableReadOnly
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-memoized-configurable-read-only-property}
*/
setReadOnly( utils, 'setMemoizedConfigurableReadOnly', require( '@stdlib/utils/define-memoized-configurable-read-only-property' ) );

/**
* @name defineMemoizedProperty
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-memoized-property}
*/
setReadOnly( utils, 'defineMemoizedProperty', require( '@stdlib/utils/define-memoized-property' ) );

/**
* @name setMemoizedReadOnly
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-memoized-read-only-property}
*/
setReadOnly( utils, 'setMemoizedReadOnly', require( '@stdlib/utils/define-memoized-read-only-property' ) );

/**
* @name setNonEnumerableProperty
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-nonenumerable-property}
*/
setReadOnly( utils, 'setNonEnumerableProperty', require( '@stdlib/utils/define-nonenumerable-property' ) );

/**
* @name setNonEnumerableReadOnlyAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-nonenumerable-read-only-accessor}
*/
setReadOnly( utils, 'setNonEnumerableReadOnlyAccessor', require( '@stdlib/utils/define-nonenumerable-read-only-accessor' ) );

/**
* @name setNonEnumerableReadOnly
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-nonenumerable-read-only-property}
*/
setReadOnly( utils, 'setNonEnumerableReadOnly', require( '@stdlib/utils/define-nonenumerable-read-only-property' ) );

/**
* @name setNonEnumerableReadWriteAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-nonenumerable-read-write-accessor}
*/
setReadOnly( utils, 'setNonEnumerableReadWriteAccessor', require( '@stdlib/utils/define-nonenumerable-read-write-accessor' ) );

/**
* @name setNonEnumerableWriteOnlyAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-nonenumerable-write-only-accessor}
*/
setReadOnly( utils, 'setNonEnumerableWriteOnlyAccessor', require( '@stdlib/utils/define-nonenumerable-write-only-accessor' ) );

/**
* @name defineProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-properties}
*/
setReadOnly( utils, 'defineProperties', require( '@stdlib/utils/define-properties' ) );

/**
* @name defineProperty
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-property}
*/
setReadOnly( utils, 'defineProperty', require( '@stdlib/utils/define-property' ) );

/**
* @name setReadOnlyAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-read-only-accessor}
*/
setReadOnly( utils, 'setReadOnlyAccessor', require( '@stdlib/utils/define-read-only-accessor' ) );

/**
* @name setReadOnly
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-read-only-property}
*/
setReadOnly( utils, 'setReadOnly', require( '@stdlib/utils/define-read-only-property' ) );

/**
* @name setReadWriteAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-read-write-accessor}
*/
setReadOnly( utils, 'setReadWriteAccessor', require( '@stdlib/utils/define-read-write-accessor' ) );

/**
* @name setWriteOnlyAccessor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/define-write-only-accessor}
*/
setReadOnly( utils, 'setWriteOnlyAccessor', require( '@stdlib/utils/define-write-only-accessor' ) );

/**
* @name dirname
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/dirname}
*/
setReadOnly( utils, 'dirname', require( '@stdlib/utils/dirname' ) );

/**
* @name doUntil
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/do-until}
*/
setReadOnly( utils, 'doUntil', require( '@stdlib/utils/do-until' ) );

/**
* @name doUntilEach
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/do-until-each}
*/
setReadOnly( utils, 'doUntilEach', require( '@stdlib/utils/do-until-each' ) );

/**
* @name doUntilEachRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/do-until-each-right}
*/
setReadOnly( utils, 'doUntilEachRight', require( '@stdlib/utils/do-until-each-right' ) );

/**
* @name doWhile
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/do-while}
*/
setReadOnly( utils, 'doWhile', require( '@stdlib/utils/do-while' ) );

/**
* @name doWhileEach
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/do-while-each}
*/
setReadOnly( utils, 'doWhileEach', require( '@stdlib/utils/do-while-each' ) );

/**
* @name doWhileEachRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/do-while-each-right}
*/
setReadOnly( utils, 'doWhileEachRight', require( '@stdlib/utils/do-while-each-right' ) );

/**
* @name DoublyLinkedList
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/doubly-linked-list}
*/
setReadOnly( utils, 'DoublyLinkedList', require( '@stdlib/utils/doubly-linked-list' ) );

/**
* @name objectEntries
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/entries}
*/
setReadOnly( utils, 'objectEntries', require( '@stdlib/utils/entries' ) );

/**
* @name objectEntriesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/entries-in}
*/
setReadOnly( utils, 'objectEntriesIn', require( '@stdlib/utils/entries-in' ) );

/**
* @name enumerableProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/enumerable-properties}
*/
setReadOnly( utils, 'enumerableProperties', require( '@stdlib/utils/enumerable-properties' ) );

/**
* @name enumerablePropertiesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/enumerable-properties-in}
*/
setReadOnly( utils, 'enumerablePropertiesIn', require( '@stdlib/utils/enumerable-properties-in' ) );

/**
* @name enumerablePropertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/enumerable-property-symbols}
*/
setReadOnly( utils, 'enumerablePropertySymbols', require( '@stdlib/utils/enumerable-property-symbols' ) );

/**
* @name enumerablePropertySymbolsIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/enumerable-property-symbols-in}
*/
setReadOnly( utils, 'enumerablePropertySymbolsIn', require( '@stdlib/utils/enumerable-property-symbols-in' ) );

/**
* @name rescape
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/escape-regexp-string}
*/
setReadOnly( utils, 'rescape', require( '@stdlib/utils/escape-regexp-string' ) );

/**
* @name evil
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/eval}
*/
setReadOnly( utils, 'evil', require( '@stdlib/utils/eval' ) );

/**
* @name every
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/every}
*/
setReadOnly( utils, 'every', require( '@stdlib/utils/every' ) );

/**
* @name everyBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/every-by}
*/
setReadOnly( utils, 'everyBy', require( '@stdlib/utils/every-by' ) );

/**
* @name everyByRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/every-by-right}
*/
setReadOnly( utils, 'everyByRight', require( '@stdlib/utils/every-by-right' ) );

/**
* @name extname
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/extname}
*/
setReadOnly( utils, 'extname', require( '@stdlib/utils/extname' ) );

/**
* @name FIFO
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/fifo}
*/
setReadOnly( utils, 'FIFO', require( '@stdlib/utils/fifo' ) );

/**
* @name find
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/find}
*/
setReadOnly( utils, 'find', require( '@stdlib/utils/find' ) );

/**
* @name flattenArray
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/flatten-array}
*/
setReadOnly( utils, 'flattenArray', require( '@stdlib/utils/flatten-array' ) );

/**
* @name flattenObject
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/flatten-object}
*/
setReadOnly( utils, 'flattenObject', require( '@stdlib/utils/flatten-object' ) );

/**
* @name forEach
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/for-each}
*/
setReadOnly( utils, 'forEach', require( '@stdlib/utils/for-each' ) );

/**
* @name forEachRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/for-each-right}
*/
setReadOnly( utils, 'forEachRight', require( '@stdlib/utils/for-each-right' ) );

/**
* @name forIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/for-in}
*/
setReadOnly( utils, 'forIn', require( '@stdlib/utils/for-in' ) );

/**
* @name forOwn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/for-own}
*/
setReadOnly( utils, 'forOwn', require( '@stdlib/utils/for-own' ) );

/**
* @name objectFromEntries
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/from-entries}
*/
setReadOnly( utils, 'objectFromEntries', require( '@stdlib/utils/from-entries' ) );

/**
* @name functionName
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/function-name}
*/
setReadOnly( utils, 'functionName', require( '@stdlib/utils/function-name' ) );

/**
* @name functionSequence
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/function-sequence}
*/
setReadOnly( utils, 'functionSequence', require( '@stdlib/utils/function-sequence' ) );

/**
* @name getPrototypeOf
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/get-prototype-of}
*/
setReadOnly( utils, 'getPrototypeOf', require( '@stdlib/utils/get-prototype-of' ) );

/**
* @name getGlobal
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/global}
*/
setReadOnly( utils, 'getGlobal', require( '@stdlib/utils/global' ) );

/**
* @name group
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/group}
*/
setReadOnly( utils, 'group', require( '@stdlib/utils/group' ) );

/**
* @name groupBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/group-by}
*/
setReadOnly( utils, 'groupBy', require( '@stdlib/utils/group-by' ) );

/**
* @name groupIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/group-in}
*/
setReadOnly( utils, 'groupIn', require( '@stdlib/utils/group-in' ) );

/**
* @name groupOwn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/group-own}
*/
setReadOnly( utils, 'groupOwn', require( '@stdlib/utils/group-own' ) );

/**
* @name identity
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/identity-function}
*/
setReadOnly( utils, 'identity', require( '@stdlib/utils/identity-function' ) );

/**
* @name ifelse
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/if-else}
*/
setReadOnly( utils, 'ifelse', require( '@stdlib/utils/if-else' ) );

/**
* @name ifthen
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/if-then}
*/
setReadOnly( utils, 'ifthen', require( '@stdlib/utils/if-then' ) );

/**
* @name indexOf
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/index-of}
*/
setReadOnly( utils, 'indexOf', require( '@stdlib/utils/index-of' ) );

/**
* @name inherit
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherit}
*/
setReadOnly( utils, 'inherit', require( '@stdlib/utils/inherit' ) );

/**
* @name inheritedEnumerableProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-enumerable-properties}
*/
setReadOnly( utils, 'inheritedEnumerableProperties', require( '@stdlib/utils/inherited-enumerable-properties' ) );

/**
* @name inheritedEnumerablePropertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-enumerable-property-symbols}
*/
setReadOnly( utils, 'inheritedEnumerablePropertySymbols', require( '@stdlib/utils/inherited-enumerable-property-symbols' ) );

/**
* @name inheritedKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-keys}
*/
setReadOnly( utils, 'inheritedKeys', require( '@stdlib/utils/inherited-keys' ) );

/**
* @name inheritedNonEnumerableProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-nonenumerable-properties}
*/
setReadOnly( utils, 'inheritedNonEnumerableProperties', require( '@stdlib/utils/inherited-nonenumerable-properties' ) );

/**
* @name inheritedNonEnumerablePropertyNames
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-nonenumerable-property-names}
*/
setReadOnly( utils, 'inheritedNonEnumerablePropertyNames', require( '@stdlib/utils/inherited-nonenumerable-property-names' ) );

/**
* @name inheritedNonEnumerablePropertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-nonenumerable-property-symbols}
*/
setReadOnly( utils, 'inheritedNonEnumerablePropertySymbols', require( '@stdlib/utils/inherited-nonenumerable-property-symbols' ) );

/**
* @name inheritedProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-properties}
*/
setReadOnly( utils, 'inheritedProperties', require( '@stdlib/utils/inherited-properties' ) );

/**
* @name inheritedPropertyDescriptor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-property-descriptor}
*/
setReadOnly( utils, 'inheritedPropertyDescriptor', require( '@stdlib/utils/inherited-property-descriptor' ) );

/**
* @name inheritedPropertyDescriptors
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-property-descriptors}
*/
setReadOnly( utils, 'inheritedPropertyDescriptors', require( '@stdlib/utils/inherited-property-descriptors' ) );

/**
* @name inheritedPropertyNames
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-property-names}
*/
setReadOnly( utils, 'inheritedPropertyNames', require( '@stdlib/utils/inherited-property-names' ) );

/**
* @name inheritedPropertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-property-symbols}
*/
setReadOnly( utils, 'inheritedPropertySymbols', require( '@stdlib/utils/inherited-property-symbols' ) );

/**
* @name inheritedWritableProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-writable-properties}
*/
setReadOnly( utils, 'inheritedWritableProperties', require( '@stdlib/utils/inherited-writable-properties' ) );

/**
* @name inheritedWritablePropertyNames
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-writable-property-names}
*/
setReadOnly( utils, 'inheritedWritablePropertyNames', require( '@stdlib/utils/inherited-writable-property-names' ) );

/**
* @name inheritedWritablePropertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inherited-writable-property-symbols}
*/
setReadOnly( utils, 'inheritedWritablePropertySymbols', require( '@stdlib/utils/inherited-writable-property-symbols' ) );

/**
* @name inmap
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inmap}
*/
setReadOnly( utils, 'inmap', require( '@stdlib/utils/inmap' ) );

/**
* @name inmapRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/inmap-right}
*/
setReadOnly( utils, 'inmapRight', require( '@stdlib/utils/inmap-right' ) );

/**
* @name keyBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/key-by}
*/
setReadOnly( utils, 'keyBy', require( '@stdlib/utils/key-by' ) );

/**
* @name keyByRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/key-by-right}
*/
setReadOnly( utils, 'keyByRight', require( '@stdlib/utils/key-by-right' ) );

/**
* @name objectKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/keys}
*/
setReadOnly( utils, 'objectKeys', require( '@stdlib/utils/keys' ) );

/**
* @name keysIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/keys-in}
*/
setReadOnly( utils, 'keysIn', require( '@stdlib/utils/keys-in' ) );

/**
* @name LinkedList
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/linked-list}
*/
setReadOnly( utils, 'LinkedList', require( '@stdlib/utils/linked-list' ) );

/**
* @name lowercaseKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/lowercase-keys}
*/
setReadOnly( utils, 'lowercaseKeys', require( '@stdlib/utils/lowercase-keys' ) );

/**
* @name mapFun
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/map-function}
*/
setReadOnly( utils, 'mapFun', require( '@stdlib/utils/map-function' ) );

/**
* @name mapKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/map-keys}
*/
setReadOnly( utils, 'mapKeys', require( '@stdlib/utils/map-keys' ) );

/**
* @name mapValues
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/map-values}
*/
setReadOnly( utils, 'mapValues', require( '@stdlib/utils/map-values' ) );

/**
* @name memoize
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/memoize}
*/
setReadOnly( utils, 'memoize', require( '@stdlib/utils/memoize' ) );

/**
* @name merge
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/merge}
*/
setReadOnly( utils, 'merge', require( '@stdlib/utils/merge' ) );

/**
* @name moveProperty
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/move-property}
*/
setReadOnly( utils, 'moveProperty', require( '@stdlib/utils/move-property' ) );

/**
* @name namedtypedtuple
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/named-typed-tuple}
*/
setReadOnly( utils, 'namedtypedtuple', require( '@stdlib/utils/named-typed-tuple' ) );

/**
* @name nativeClass
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/native-class}
*/
setReadOnly( utils, 'nativeClass', require( '@stdlib/utils/native-class' ) );

/**
* @name nextTick
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/next-tick}
*/
setReadOnly( utils, 'nextTick', require( '@stdlib/utils/next-tick' ) );

/**
* @name none
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/none}
*/
setReadOnly( utils, 'none', require( '@stdlib/utils/none' ) );

/**
* @name noneBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/none-by}
*/
setReadOnly( utils, 'noneBy', require( '@stdlib/utils/none-by' ) );

/**
* @name noneByRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/none-by-right}
*/
setReadOnly( utils, 'noneByRight', require( '@stdlib/utils/none-by-right' ) );

/**
* @name nonEnumerableProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/nonenumerable-properties}
*/
setReadOnly( utils, 'nonEnumerableProperties', require( '@stdlib/utils/nonenumerable-properties' ) );

/**
* @name nonEnumerablePropertiesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/nonenumerable-properties-in}
*/
setReadOnly( utils, 'nonEnumerablePropertiesIn', require( '@stdlib/utils/nonenumerable-properties-in' ) );

/**
* @name nonEnumerablePropertyNames
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/nonenumerable-property-names}
*/
setReadOnly( utils, 'nonEnumerablePropertyNames', require( '@stdlib/utils/nonenumerable-property-names' ) );

/**
* @name nonEnumerablePropertyNamesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/nonenumerable-property-names-in}
*/
setReadOnly( utils, 'nonEnumerablePropertyNamesIn', require( '@stdlib/utils/nonenumerable-property-names-in' ) );

/**
* @name nonEnumerablePropertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/nonenumerable-property-symbols}
*/
setReadOnly( utils, 'nonEnumerablePropertySymbols', require( '@stdlib/utils/nonenumerable-property-symbols' ) );

/**
* @name nonEnumerablePropertySymbolsIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/nonenumerable-property-symbols-in}
*/
setReadOnly( utils, 'nonEnumerablePropertySymbolsIn', require( '@stdlib/utils/nonenumerable-property-symbols-in' ) );

/**
* @name nonIndexKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/nonindex-keys}
*/
setReadOnly( utils, 'nonIndexKeys', require( '@stdlib/utils/nonindex-keys' ) );

/**
* @name noop
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/noop}
*/
setReadOnly( utils, 'noop', require( '@stdlib/utils/noop' ) );

/**
* @name objectInverse
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/object-inverse}
*/
setReadOnly( utils, 'objectInverse', require( '@stdlib/utils/object-inverse' ) );

/**
* @name objectInverseBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/object-inverse-by}
*/
setReadOnly( utils, 'objectInverseBy', require( '@stdlib/utils/object-inverse-by' ) );

/**
* @name omit
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/omit}
*/
setReadOnly( utils, 'omit', require( '@stdlib/utils/omit' ) );

/**
* @name omitBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/omit-by}
*/
setReadOnly( utils, 'omitBy', require( '@stdlib/utils/omit-by' ) );

/**
* @name openURL
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/open-url}
*/
setReadOnly( utils, 'openURL', require( '@stdlib/utils/open-url' ) );

/**
* @name papply
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/papply}
*/
setReadOnly( utils, 'papply', require( '@stdlib/utils/papply' ) );

/**
* @name papplyRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/papply-right}
*/
setReadOnly( utils, 'papplyRight', require( '@stdlib/utils/papply-right' ) );

/**
* @name parallel
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/parallel}
*/
setReadOnly( utils, 'parallel', require( '@stdlib/utils/parallel' ) );

/**
* @name parseJSON
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/parse-json}
*/
setReadOnly( utils, 'parseJSON', require( '@stdlib/utils/parse-json' ) );

/**
* @name pick
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/pick}
*/
setReadOnly( utils, 'pick', require( '@stdlib/utils/pick' ) );

/**
* @name pickBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/pick-by}
*/
setReadOnly( utils, 'pickBy', require( '@stdlib/utils/pick-by' ) );

/**
* @name pluck
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/pluck}
*/
setReadOnly( utils, 'pluck', require( '@stdlib/utils/pluck' ) );

/**
* @name pop
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/pop}
*/
setReadOnly( utils, 'pop', require( '@stdlib/utils/pop' ) );

/**
* @name prepend
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/prepend}
*/
setReadOnly( utils, 'prepend', require( '@stdlib/utils/prepend' ) );

/**
* @name properties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/properties}
*/
setReadOnly( utils, 'properties', require( '@stdlib/utils/properties' ) );

/**
* @name propertiesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/properties-in}
*/
setReadOnly( utils, 'propertiesIn', require( '@stdlib/utils/properties-in' ) );

/**
* @name propertyDescriptor
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-descriptor}
*/
setReadOnly( utils, 'propertyDescriptor', require( '@stdlib/utils/property-descriptor' ) );

/**
* @name propertyDescriptorIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-descriptor-in}
*/
setReadOnly( utils, 'propertyDescriptorIn', require( '@stdlib/utils/property-descriptor-in' ) );

/**
* @name propertyDescriptors
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-descriptors}
*/
setReadOnly( utils, 'propertyDescriptors', require( '@stdlib/utils/property-descriptors' ) );

/**
* @name propertyDescriptorsIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-descriptors-in}
*/
setReadOnly( utils, 'propertyDescriptorsIn', require( '@stdlib/utils/property-descriptors-in' ) );

/**
* @name propertyNames
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-names}
*/
setReadOnly( utils, 'propertyNames', require( '@stdlib/utils/property-names' ) );

/**
* @name propertyNamesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-names-in}
*/
setReadOnly( utils, 'propertyNamesIn', require( '@stdlib/utils/property-names-in' ) );

/**
* @name propertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-symbols}
*/
setReadOnly( utils, 'propertySymbols', require( '@stdlib/utils/property-symbols' ) );

/**
* @name propertySymbolsIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/property-symbols-in}
*/
setReadOnly( utils, 'propertySymbolsIn', require( '@stdlib/utils/property-symbols-in' ) );

/**
* @name push
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/push}
*/
setReadOnly( utils, 'push', require( '@stdlib/utils/push' ) );

/**
* @name realmax
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/real-max}
*/
setReadOnly( utils, 'realmax', require( '@stdlib/utils/real-max' ) );

/**
* @name realmin
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/real-min}
*/
setReadOnly( utils, 'realmin', require( '@stdlib/utils/real-min' ) );

/**
* @name reduce
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/reduce}
*/
setReadOnly( utils, 'reduce', require( '@stdlib/utils/reduce' ) );

/**
* @name reduceRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/reduce-right}
*/
setReadOnly( utils, 'reduceRight', require( '@stdlib/utils/reduce-right' ) );

/**
* @name reFromString
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/regexp-from-string}
*/
setReadOnly( utils, 'reFromString', require( '@stdlib/utils/regexp-from-string' ) );

/**
* @name reorderArguments
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/reorder-arguments}
*/
setReadOnly( utils, 'reorderArguments', require( '@stdlib/utils/reorder-arguments' ) );

/**
* @name reverseArguments
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/reverse-arguments}
*/
setReadOnly( utils, 'reverseArguments', require( '@stdlib/utils/reverse-arguments' ) );

/**
* @name safeintmax
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/safe-int-max}
*/
setReadOnly( utils, 'safeintmax', require( '@stdlib/utils/safe-int-max' ) );

/**
* @name safeintmin
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/safe-int-min}
*/
setReadOnly( utils, 'safeintmin', require( '@stdlib/utils/safe-int-min' ) );

/**
* @name shift
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/shift}
*/
setReadOnly( utils, 'shift', require( '@stdlib/utils/shift' ) );

/**
* @name sizeOf
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/size-of}
*/
setReadOnly( utils, 'sizeOf', require( '@stdlib/utils/size-of' ) );

/**
* @name some
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/some}
*/
setReadOnly( utils, 'some', require( '@stdlib/utils/some' ) );

/**
* @name someBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/some-by}
*/
setReadOnly( utils, 'someBy', require( '@stdlib/utils/some-by' ) );

/**
* @name someByRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/some-by-right}
*/
setReadOnly( utils, 'someByRight', require( '@stdlib/utils/some-by-right' ) );

/**
* @name Stack
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/stack}
*/
setReadOnly( utils, 'Stack', require( '@stdlib/utils/stack' ) );

/**
* @name tabulate
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/tabulate}
*/
setReadOnly( utils, 'tabulate', require( '@stdlib/utils/tabulate' ) );

/**
* @name tabulateBy
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/tabulate-by}
*/
setReadOnly( utils, 'tabulateBy', require( '@stdlib/utils/tabulate-by' ) );

/**
* @name timeit
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/timeit}
*/
setReadOnly( utils, 'timeit', require( '@stdlib/utils/timeit' ) );

/**
* @name trycatch
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/try-catch}
*/
setReadOnly( utils, 'trycatch', require( '@stdlib/utils/try-catch' ) );

/**
* @name tryFunction
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/try-function}
*/
setReadOnly( utils, 'tryFunction', require( '@stdlib/utils/try-function' ) );

/**
* @name tryRequire
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/try-require}
*/
setReadOnly( utils, 'tryRequire', require( '@stdlib/utils/try-require' ) );

/**
* @name trythen
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/try-then}
*/
setReadOnly( utils, 'trythen', require( '@stdlib/utils/try-then' ) );

/**
* @name typemax
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/type-max}
*/
setReadOnly( utils, 'typemax', require( '@stdlib/utils/type-max' ) );

/**
* @name typemin
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/type-min}
*/
setReadOnly( utils, 'typemin', require( '@stdlib/utils/type-min' ) );

/**
* @name typeOf
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/type-of}
*/
setReadOnly( utils, 'typeOf', require( '@stdlib/utils/type-of' ) );

/**
* @name uncapitalizeKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/uncapitalize-keys}
*/
setReadOnly( utils, 'uncapitalizeKeys', require( '@stdlib/utils/uncapitalize-keys' ) );

/**
* @name uncurry
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/uncurry}
*/
setReadOnly( utils, 'uncurry', require( '@stdlib/utils/uncurry' ) );

/**
* @name uncurryRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/uncurry-right}
*/
setReadOnly( utils, 'uncurryRight', require( '@stdlib/utils/uncurry-right' ) );

/**
* @name unshift
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/unshift}
*/
setReadOnly( utils, 'unshift', require( '@stdlib/utils/unshift' ) );

/**
* @name until
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/until}
*/
setReadOnly( utils, 'until', require( '@stdlib/utils/until' ) );

/**
* @name untilEach
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/until-each}
*/
setReadOnly( utils, 'untilEach', require( '@stdlib/utils/until-each' ) );

/**
* @name untilEachRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/until-each-right}
*/
setReadOnly( utils, 'untilEachRight', require( '@stdlib/utils/until-each-right' ) );

/**
* @name unzip
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/unzip}
*/
setReadOnly( utils, 'unzip', require( '@stdlib/utils/unzip' ) );

/**
* @name uppercaseKeys
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/uppercase-keys}
*/
setReadOnly( utils, 'uppercaseKeys', require( '@stdlib/utils/uppercase-keys' ) );

/**
* @name objectValues
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/values}
*/
setReadOnly( utils, 'objectValues', require( '@stdlib/utils/values' ) );

/**
* @name objectValuesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/values-in}
*/
setReadOnly( utils, 'objectValuesIn', require( '@stdlib/utils/values-in' ) );

/**
* @name whilst
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/while}
*/
setReadOnly( utils, 'whilst', require( '@stdlib/utils/while' ) );

/**
* @name whileEach
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/while-each}
*/
setReadOnly( utils, 'whileEach', require( '@stdlib/utils/while-each' ) );

/**
* @name whileEachRight
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/while-each-right}
*/
setReadOnly( utils, 'whileEachRight', require( '@stdlib/utils/while-each-right' ) );

/**
* @name writableProperties
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/writable-properties}
*/
setReadOnly( utils, 'writableProperties', require( '@stdlib/utils/writable-properties' ) );

/**
* @name writablePropertiesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/writable-properties-in}
*/
setReadOnly( utils, 'writablePropertiesIn', require( '@stdlib/utils/writable-properties-in' ) );

/**
* @name writablePropertyNames
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/writable-property-names}
*/
setReadOnly( utils, 'writablePropertyNames', require( '@stdlib/utils/writable-property-names' ) );

/**
* @name writablePropertyNamesIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/writable-property-names-in}
*/
setReadOnly( utils, 'writablePropertyNamesIn', require( '@stdlib/utils/writable-property-names-in' ) );

/**
* @name writablePropertySymbols
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/writable-property-symbols}
*/
setReadOnly( utils, 'writablePropertySymbols', require( '@stdlib/utils/writable-property-symbols' ) );

/**
* @name writablePropertySymbolsIn
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/writable-property-symbols-in}
*/
setReadOnly( utils, 'writablePropertySymbolsIn', require( '@stdlib/utils/writable-property-symbols-in' ) );

/**
* @name zip
* @memberof utils
* @readonly
* @type {Function}
* @see {@link module:@stdlib/utils/zip}
*/
setReadOnly( utils, 'zip', require( '@stdlib/utils/zip' ) );


// EXPORTS //

module.exports = utils;
