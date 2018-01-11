
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


# TARGETS #

#/
# Prints a Markdown formatted reference corresponding to a provided citation identifier.
#
# @param {string} CITATION - citation identifier prefixed with an `@` symbol (e.g., `@marsaglia:2000a`)
# @param {string} [CITATION_REFERENCE_DATABASE] - path to a citation reference database (e.g., `/foo/bar/baz/bib.bib`)
# @param {string} [CITATION_REFERENCE_CSL] - path to a Citation Style Language (CSL) file (e.g., `/foo/bar/baz/style.csl`)
#
# @example
# make make citation-reference CITATION=@marsaglia:2000a
#/
citation-reference: $(NODE_MODULES)
	$(QUIET) $(CITATION_REFERENCE) $(CITATION_REFERENCE_FLAGS) $(CITATION)

.PHONY: citation-reference
