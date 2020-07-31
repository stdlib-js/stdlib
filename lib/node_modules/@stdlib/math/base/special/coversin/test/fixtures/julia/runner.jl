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
julia> x = range( -1000.0, stop = 1000.0, length = 2001 );
julia> gen( x, \"./data.json\" );
```
"""
function gen( domain, filepath )
	x = collect( domain );
	y = 1.0 .- sin.( x );
	data = Dict([
		("x", x),
		("expected", y)
	]);
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Negative medium sized values:
x = range( -256.0*pi, stop = 0.0, length = 4000 )
out = joinpath( dir, "medium_negative.json" );
gen( x, out );

# Positive medium sized values:
x = range( 0.0, stop = 256.0*pi, length = 4000 )
out = joinpath( dir, "medium_positive.json" );
gen( x, out );

# Negative large values:
x = range( -2.0^20*(pi/2.0), stop = -2.0^60*(pi/2.0), length = 4000 )
out = joinpath( dir, "large_negative.json" );
gen( x, out );

# Positive large values:
x = range( 2.0^20*(pi/2.0), stop = 2.0^60*(pi/2.0), length = 4000 )
out = joinpath( dir, "large_positive.json" );
gen( x, out );

# Negative huge values:
x = range( -2.0^60*(pi/2.0), stop = -2.0^1000*(pi/2.0), length = 4000 )
out = joinpath( dir, "huge_negative.json" );
gen( x, out );

# Positive huge values:
x = range( 2.0^60*(pi/2.0), stop = 2.0^1000*(pi/2.0), length = 4000 )
out = joinpath( dir, "huge_positive.json" );
gen( x, out );
