<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# Benchmark Names

> Guide describing stdlib's benchmark naming conventions.

## TL;DR

When naming benchmarks in stdlib, follow this pattern (in order):

```text
[<language>::]<base_name>[::<facet>,...][:<method>][:<param>=<value>,...]
```

**Key rules:**

-   **Omit the language** for JavaScript benchmarks; include it (`c::`, `python::`, etc.) for others.
-   **Use the package or operation name** as the base benchmark name.
-   **Use facets (`::`)** for categorical comparisons you want side-by-side (e.g., `native`, `ndarray`, `wasm`).
-   **Use a method name (`:`)** only when measuring a specific method or property on a package's main export.
-   **Use parameters (`:k=v, ...`)** for sizes, shapes, flags, or other benchmark inputs (e.g., `len=1024`, `order(A)=row-major`).
-   **Keep components in this order**: language → base → facets → method → parameters.
-   **Do not include `::`, `:`, `,`, or `=`** inside names or values.
-   Prefer **consistent parameter names** (`len`, `size`, etc.) within a set of benchmarks and ideally with benchmarks found elsewhere in stdlib.

The goal is simple: benchmark names should be **easy to parse, easy to group, and easy to compare**.

* * *

## Introduction

When authoring benchmarks in stdlib, we adhere to a specific convention for benchmark names. Adhering to this convention ensures consistency throughout the code base and allows downstream consumers of benchmark results to reliably parse those results for purposes of faceting and subsequent analysis and visualization.

The following are some examples of benchmark names found in the stdlib code base:

```javascript
bench( pkg, ... );
bench( format( '%s:len=%d', pkg, len ), ... );
bench( format( '%s::native:len=%d', pkg, len ), ... );
bench( format( '%s::square_matrix:size=%d', pkg, numel( sh ) ), ... );
bench( format( '%s:order(A)=column-major,order(B)=row-major,order(C)=row-major,trans(A)=false,trans(B)=false,size=%d', pkg, len*len ), ... );
bench( format( '%s:ndarray:order(A)=column-major,order(B)=row-major,order(C)=row-major,trans(A)=false,trans(B)=false,size=%d', pkg, len*len ), ... );
bench( format( '%s::native:ndarray:order(A)=column-major,order(B)=column-major,order(C)=column-major,trans(A)=true,trans(B)=false,size=%d', pkg, len*len ), ... );
```

Similarly, in C/C++,

```c
printf( "# c::%s\n", NAME );
printf( "# c::%s:len=%d\n", NAME, len );
printf( "# c::%s:ndarray:len=%d\n", NAME, len );
printf( "# c::cephes::%s\n", NAME );
printf( "# cpp::boost::%s\n", NAME );
```

In Fortran,

```fortran
print '(A,A,A,A)', '# fortran::', name, ':len=', trim(tmp)
```

In Python,

```python
print("# python::" + NAME)
print("# python::scipy::" + NAME)
```

In Julia,

```julia
@printf( "# julia::%s\n", name );
```

In R,

```r
cat( paste0( '# r::', name, '\n' ) );
```

Note that the `# ` prefix in the various non-JavaScript language strings is not a part of the benchmark name and indicates the start of a comment in Test Anything Protocol (TAP) output. For JavaScript benchmarks, the `# ` is implied, as the stdlib benchmark runner includes the prefix when writing the benchmark name to `stdout`.

* * *

## Format

The general format for benchmark names is as follows:

```text
[<language>::]<base_name>[::<facet>, ...][:<method>][:<param>=<value>, ...]
```

where `[...]` indicates that the corresponding benchmark name component is optional. Benchmark names have the following components which **must** appear in the following order:

-   **language**: language in which the benchmark is being run (_optional_). If omitted, the benchmark is assumed to be a JavaScript benchmark. If included in a benchmark name, this component must be delineated from the rest of the benchmark name by a double colon `::`.
-   **base_name**: "base" name of the benchmark. In JavaScript, this is typically the name of the package in which the benchmark resides. In other languages, the base name is the name of the corresponding function name or operation being measured.
-   **...facet**: one or more conceptual groupings to which a benchmark belongs (_optional_). If included in a benchmark name, this component **must** be prefixed by a double colon `::`. Each facet **must** be separated by a comma. If you imagine a grouped column chart, think of this component as a means of specifying columns within a group in order to facilitate comparison between measurements having the same parameterization.
-   **method**: name of the method being measured (_optional_). A benchmark name **must** only specify a single method name. If included in a benchmark name, this component **must** be prefixed by a single colon `:`. This component is only relevant when measuring the performance of a method or property attached to a package's main export.
-   **...param=value**: one or more parameter name-value pairs (_optional_). Each parameter name-value pair **must** be separated by a comma. If included in a benchmark name, this component **must** be prefixed by a single colon `:`. Parameter names **must** be unique. If you imagine a column chart, think of this component as a means of distinguishing columns, and, if you imagine a grouped column chart, think of this component as a means of distinguishing column groups.

As the character sequences `:`, `::`, `,`, and `=` have special meaning in benchmark names, components and sub-components (i.e., facets and parameter-value pairs) **must not** include those character sequences, as they are explicitly reserved for delineating content between and within components.

We use the following as a canonical list of language names:

-   `c`
-   `cpp`
-   `fortran`
-   `javascript`
-   `julia`
-   `python`
-   `r`

* * *

## Parsing

The benchmark name format lends itself readily to unambiguous parsing. If we consider the following toy example,

```text
javascript::foo::beep,boop:bar:x=1,y=2
```

we observe the following:

-   a benchmark name **may** contain at most three components delineated by a double colon `::` (e.g., `1::2::3`).

    -   if three components are delineated by a double colon `::`, the first component is the language component, the second component is the "base" benchmark name, and the third component contains facets.

    -   if two components are delineated by a double colon `::`,

        -   if the first component is a recognized language, the first component is a language component and the second component is the "base" benchmark name.
        -   otherwise, the first component is the "base" benchmark name, and the second component contains facets.

-   if the previous set of components is followed by a single colon `:`,

    -   if the component contains an equal sign `=` or comma `,`, the component is a parameterization component.
    -   otherwise, the component specifies a method name.

-   if the previous component specifies a method name and is followed by a single colon `:`, the last component is a parameterization component.

* * *

## Example

Let's return to one of the more complicated benchmark name examples above and break it down into its constituent components:

```text
%s::native:ndarray:order(A)=column-major,order(B)=column-major,order(C)=column-major,trans(A)=true,trans(B)=false,size=%d
```

### Language

As the benchmark name does not begin with a string followed by a double colon `::` (e.g., `c::`), the benchmark language is assumed to be JavaScript.

### Benchmark Name

The `%s` is a placeholder in a formatted string for inserting a "base" benchmark name. In this case, the base benchmark name is the package name, thus allowing us to distinguish the benchmarks of one package from the benchmarks of another package when running benchmarks across multiple packages.

### Facets

The benchmark name includes a single facet (i.e., conceptual grouping): `native`. This facet allows downstream consumers to group benchmark results having the same parameterization, thus facilitating comparison. For example, if we want to compare the performance between a JavaScript implementation of matrix multiplication and a Node.js native add-on binding to a C implementation of matrix multiplication across different matrix sizes, the `native` facet allows us to group the JavaScript and native add-on results for each matrix size (e.g., allowing us to answer the question: how does JavaScript compare to a native add-on for 10-by-10 matrices? for 100-by-100 matrices? and so on and so forth).

As a general rule of thumb, use facets for categorical distinctions for which you want side-by-side comparisons; use parameters for continuous or scaling dimensions.

### Method Name

The benchmark name indicates that the benchmark is measuring the performance of a method: `ndarray` (e.g., `sgemm.ndarray(...)`).

The method name component may be thought of as a specialized facet, which is set apart from other facets in order to allow consolidation across methods and properties, while still retaining the ability to facet across other benchmark dimensions.

As a general rule of thumb, use `:<method>` only when measuring a callable or property on the package's main export; use facets for implementation strategies, backends, or conceptual groupings.

### Parameter-Value Pairs

The benchmark name includes the following parameterization:

-   `order(A)`: order of the matrix `A`.
-   `order(B)`: order of the matrix `B`.
-   `order(C)`: order of the matrix `C`.
-   `trans(A)`: boolean indicating whether the matrix `A` is transposed.
-   `trans(B)`: boolean indicating whether the matrix `B` is transposed.
-   `size`: the number of elements in each matrix `A`, `B`, and `C`.

The `size` (or `len`) parameterization is common in stdlib, as we are often interested in how performance varies as one changes the number of elements in a dataset, such as might be the case when operating over multiple elements within an array or ndarray.

While `len` and `size` are commonly used parameter names, parameter naming is not explicitly enforced; however, consistency within a set of benchmarks and across the larger project is strongly encouraged.
