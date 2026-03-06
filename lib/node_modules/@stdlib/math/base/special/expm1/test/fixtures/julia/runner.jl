#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import JSON

"""
    gen( domain, filepath )

Generate fixture data and write to file.

# Arguments

* `domain`: domain
* `filepath::AbstractString`: filepath of the output file

# Examples

``` julia
julia> x = range( -100, stop = 100, length = 2001 );
julia> gen( x, \"./data.json\" );
```
"""
function gen( domain, filepath )
	x = collect( domain );
	y = expm1.( x );
	data = Dict([
		("x", x),
		("expected", y)
	]);
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Medium negative values:
x = range( -709.78, stop = -1.0, length = 1000 );
out = joinpath( dir, "./medium_negative.json" );
gen( x, out );

# Medium positive values:
x = range( 1.0, stop = 709.78, length = 1000 );
out = joinpath( dir, "./medium_positive.json" );
gen( x, out );

# Small negative values:
x = range( -1.0, stop = -2.0^-54, length = 1000 );
out = joinpath( dir, "./small_negative.json" );
gen( x, out );

# Small positive values:
x = range( 2.0^-54, stop = 1.0, length = 1000 );
out = joinpath( dir, "./small_positive.json" );
gen( x, out );

# Tiny values:
x = range( -2.0^-54, stop = 2.0^-54, length = 1000 );
out = joinpath( dir, "./tiny.json" );
gen( x, out );
