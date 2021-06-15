<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# CompactAdjacencyMatrix

> Compact adjacency matrix constructor.

<section class="usage">

## Usage

```javascript
var CompactAdjacencyMatrix = require( '@stdlib/utils/compact-adjacency-matrix' );
```

#### CompactAdjacencyMatrix( N )

Returns a compact adjacency matrix instance.

```javascript
var adj = new CompactAdjacencyMatrix( 4 );
// returns <CompactAdjacencyMatrix>

// ...

adj.addEdge( 0, 1 );
adj.addEdge( 0, 2 );
adj.addEdge( 1, 2 );
adj.addEdge( 2, 3 );
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var CompactAdjacencyMatrix = require( '@stdlib/utils/compact-adjacency-matrix' );

// Create a new adjacency matrix:
var adj = new CompactAdjacencyMatrix( 4 );

// Add edges:
adj.addEdge( 1, 0 );
adj.addEdge( 1, 2 );
adj.addEdge( 0, 2 );
adj.addEdge( 2, 3 );

// Compute the indegrees and outdegrees for each vertex:
var id;
var od;
var i;
for ( i = 0; i < 4; i++ ) {
    id = adj.inDegree( i );
    od = adj.outDegree( i );
    console.log( 'vertex: %d. indegree: %d. outdegree: %d.', i, id, od );
}

// Print the list of all edges:
console.log( adj.edges );
// => [ [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 3 ] ]

// Convert the adjacency matrix to an adjacency list representation:
console.log( adj.toAdjacencyList() );
// => [ [ 2 ], [ 0, 2 ], [ 3 ], [] ]

// Compute a topological ordering:
console.log( adj.toposort() );
// => [ [ 1, 0, 2, 3 ], null ]
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
