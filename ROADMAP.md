<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# Roadmap

> Project roadmap.

## Vision

stdlib will deliver high-quality, performant libraries for numerical computation and become _the_ library for mathematical and scientific computation on the web.

## Themes

The first major theme in support of this vision is multi-dimensional arrays. Development resources will be dedicated to building high-performance engines for matrix and tensor operations. This work will make stdlib the most complete and robust scientific library for use in both web browsers and Node.js.

The second major theme is native implementations for linear algebra. This will entail native bindings to hardware optimized linear algebra libraries for use in Node.js libraries and applications and WebAssembly implementations for use in web browsers. This work will make stdlib the most performant library for scientific computation on the web.

The third major theme is data visualization. Building on the first and second themes, data visualization facilities will demonstrate why JavaScript and Node.js are suitable platforms for numerical analysis and provide a foundation for more advanced user-facing data analysis applications.

The fourth major theme is automation. Automation is critical for the project's ability to scale and to streamline the development experience. This work will make stdlib one of the most innovative and developer friendly open source projects.

Last, the final theme is documentation. Part of this effort will be continuing to build a web presence and demonstrating the need and importance for stdlib. This work will enable the project to grow and attract both users and contributors.   

## Details

### Multi-dimensional Arrays

-   broadcasting semantics
-   ndarray engine for element-wise operations
-   ndarray engine for axis-wise operations
-   add vectorized array APIs

### Native Implementations

-   BLAS bindings
-   BLAS ports (JavaScript and C)
-   LAPACK bindings
-   LAPACK ports (JavaScript and C)

### Data Visualization

-   Additional chart types (bar, column, histogram)
-   ASCII engine
-   Canvas engine (including PNG output)

### Automation

-   Performance improvements to continuous integration environments
-   Browser testing
-   Package scaffolding tools
-   Package decomposition (independent package publishing)

### Documentation

-   Website
-   Source code (JSDoc)
-   Blog posts
-   Tutorials
