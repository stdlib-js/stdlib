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
    gen( domain, name )

Generate fixture data and write to file.

# Arguments

* `domain`: domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -100.0, stop = 100.0, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( domain, name )
	x = collect( domain );
	y = exp2.( x );

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("expected", y)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
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
x = range( -1022.0, stop = -1.0, length = 1003 );
gen( x, "medium_negative.json" );

# Medium positive values:
x = range( 1.0, stop = 1023.0, length = 1003 );
gen( x, "medium_positive.json" );

# Small negative values:
x = range( -1.0, stop = -2.0^-54, length = 1007 );
gen( x, "small_negative.json" );

# Small positive values:
x = range( 2.0^-54, stop = 1.0, length = 1007 );
gen( x, "small_positive.json" );

# Tiny values:
x = range( -2.0^-54, stop = 2.0^-54, length = 1007 );
gen( x, "tiny.json" );
