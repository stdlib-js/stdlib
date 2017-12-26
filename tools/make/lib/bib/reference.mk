
# VARIABLES #

# Define the citation:
CITATION ?=

# Define the command for returning a citation reference:
CITATION_REFERENCE ?= $(NODE) $(TOOLS_PKGS_DIR)/bib/citation-reference/bin/cli

# Define the command-line options to be used when executing the command:
CITATION_REFERENCE_FLAGS ?= \
	--database $(ROOT_DIR)/docs/references/bib.bib \
	--csl $(ROOT_DIR)/docs/references/csl/chicago-author-date.csl


# TARGETS #

# Return a reference.
#
# This target returns a reference corresponding to a citation identifier.

citation-reference: $(NODE_MODULES)
	$(QUIET) $(CITATION_REFERENCE) $(CITATION_REFERENCE_FLAGS) $(CITATION)

.PHONY: citation-reference
