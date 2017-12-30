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

-   `ndarray` data structure
-   generalized `ndarray` API
-   engine for element-wise operations
-   engine for axis-wise operations

### Native Implementations

-   BLAS bindings
-   BLAS ports (JavaScript and C)
-   LAPACK bindings
-   LAPACK ports (JavaScript and C)

### Data Visualization

-   Additional chart types (bar, column, histogram)
-   ASCII engine
-   Canvas engine (including PNG output)
-   CLI

### Automation

-   Continuous integration environments
-   Browser testing
-   Package scaffolding tools
-   Linters (REPL text, JSDoc examples, and more)

### Documentation

-   Website
-   Source code (JSDoc)
-   Blog posts
-   Tutorials
