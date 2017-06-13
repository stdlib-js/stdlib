#!/usr/bin/env awk -f
#
# Annotates a file statistic by prefixing a new column which includes the file type.
#
# Usage: annotate_file_type
#
# Input:
#   - <statistic> <filename>
#
# Output:
#   - <file_type> <statistic> <filename>
#

# When adding file extension patterns, do so in alphabetical order.

# Special cases...
/(LICENSE|NOTICE)$/ {
	print "LICENSE" OFS $1 OFS $2
	next
}
/datapackage\.json$/ {
	print "datapackage.json" OFS $1 OFS $2
	next
}
/package\.json$/ {
	print "package.json" OFS $1 OFS $2
	next
}

# Known file extensions (keep in alphabetical order)...
/\.awk$/ {
	print "AWK" OFS $1 OFS $2
	next
}
/\.bib$/ {
	print "BibTeX" OFS $1 OFS $2
	next
}
/\.c$/ {
	print "C" OFS $1 OFS $2
	next
}
/\.cpp$/ {
	print "C++" OFS $1 OFS $2
	next
}
/\.csl$/ {
	print "CSL" OFS $1 OFS $2
	next
}
/\.css$/ {
	print "CSS" OFS $1 OFS $2
	next
}
/\.csv$/ {
	print "CSV" OFS $1 OFS $2
	next
}
/\.eot$/ {
	print "fonts" OFS $1 OFS $2
	next
}
/\.f$/ {
	print "Fortran" OFS $1 OFS $2
	next
}
/\.gif$/ {
	print "gif" OFS $1 OFS $2
	next
}
/\.go$/ {
	print "Go" OFS $1 OFS $2
	next
}
/\.gyp$/ {
	print "GYP" OFS $1 OFS $2
	next
}
/\.h$/ {
	print "C" OFS $1 OFS $2
	next
}
/\.hpp$/ {
	print "C++" OFS $1 OFS $2
	next
}
/\.html$/ {
	print "HTML" OFS $1 OFS $2
	next
}
/\.jl$/ {
	print "Julia" OFS $1 OFS $2
	next
}
/\.jpg$/ {
	print "JPG" OFS $1 OFS $2
	next
}
/\.js$/ {
	print "JavaScript" OFS $1 OFS $2
	next
}
/\.json$/ {
	print "JSON" OFS $1 OFS $2
	next
}
/Makefile$/ {
	print "make" OFS $1 OFS $2
	next
}
/\.md$/ {
	print "Markdown" OFS $1 OFS $2
	next
}
/\.mk$/ {
	print "make" OFS $1 OFS $2
	next
}
/\.png$/ {
	print "PNG" OFS $1 OFS $2
	next
}
/\.py$/ {
	print "Python" OFS $1 OFS $2
	next
}
/\.R$/ {
	print "R" OFS $1 OFS $2
	next
}
/\.sh$/ {
	print "bash" OFS $1 OFS $2
	next
}
/\.svg$/ {
	print "SVG" OFS $1 OFS $2
	next
}
/\.txt$/ {
	print "plaintext" OFS $1 OFS $2
	next
}
/\.wasm$/ {
	print "WASM" OFS $1 OFS $2
	next
}
/\.woff$/ {
	print "fonts" OFS $1 OFS $2
	next
}
/\.yml$/ {
	print "YAML" OFS $1 OFS $2
	next
}

# Special cases...
$2 ~ /^\.([A-Za-z])+$|\/\.([A-Za-z])+$/ {
	print "dotfiles" OFS $1 OFS $2
	next
}
$2 ~ /\/([A-Za-z0-9_-])+$/ {
	print "executables" OFS $1 OFS $2
	next
}

# Everything else...
{
	print "OTHER" OFS $1 OFS $2
}
