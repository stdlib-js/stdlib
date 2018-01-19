#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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
#/

# VARIABLES #

# Define the citation:
CITATION ?=

# Define the command for returning a citation reference:
CITATION_REFERENCE ?= $(NODE) $(TOOLS_PKGS_DIR)/bib/citation-reference/bin/cli

# Define the path to a citation reference database:
CITATION_REFERENCE_DATABASE ?= $(ROOT_DIR)/docs/references/bib.bib

# Define the path to a Citation Style Language (CSL) file:
CITATION_REFERENCE_CSL ?= $(ROOT_DIR)/docs/references/csl/chicago-author-date.csl

# Define the command-line options to be used when executing the command:
CITATION_REFERENCE_FLAGS ?= \
	--database $(CITATION_REFERENCE_DATABASE) \
	--csl $(CITATION_REFERENCE_CSL)


# RULES #

#/
# Prints a Markdown formatted reference corresponding to a provided citation identifier.
#
# @param {string} CITATION - citation identifier prefixed with an `@` symbol (e.g., `@marsaglia:2000a`)
# @param {string} [CITATION_REFERENCE_DATABASE] - path to a citation reference database (e.g., `/foo/bar/baz/bib.bib`)
# @param {string} [CITATION_REFERENCE_CSL] - path to a Citation Style Language (CSL) file (e.g., `/foo/bar/baz/style.csl`)
#
# @example
# make citation-reference CITATION=@marsaglia:2000a
#/
citation-reference: $(NODE_MODULES)
	$(QUIET) NODE_PATH=$(NODE_PATH) $(CITATION_REFERENCE) $(CITATION_REFERENCE_FLAGS) $(CITATION)

.PHONY: citation-reference
