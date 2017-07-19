
# VARIABLES #

# Define the command for returning a citation reference:
INSERT_LINK ?= $(NODE) $(TOOLS_DIR)/links/create/bin/cli

# Define the command-line options to be used when executing the command:
INSERT_LINK_FLAGS ?= \
	--database $(ROOT_DIR)/docs/links/database.json


# TARGETS #

# Create a link entry.
#
# This target creates a link entry in the link database.

links-insert: $(NODE_MODULES)
	$(QUIET) $(INSERT_LINK) $(INSERT_LINK_FLAGS)

.PHONY: links-insert
