
# VARIABLES #

# Define the command for inserting a link into the database:
LINKS_INSERT ?= $(NODE) $(TOOLS_DIR)/links/create/bin/cli

# Define the command-line options to be used when executing the command:
LINKS_INSERT_FLAGS ?= \
	--database $(ROOT_DIR)/docs/links/database.json

# Define the command for resolving an id from a URI:
LINKS_URI2ID ?= $(NODE) $(TOOLS_DIR)/links/uri2id/bin/cli

# Define the command-line options to be used when executing the command:
LINKS_URI2ID_FLAGS ?= \
	--database $(ROOT_DIR)/docs/links/database.json


# TARGETS #

# Create a link entry.
#
# This target creates a link entry in the link database.

links-insert: $(NODE_MODULES)
	$(QUIET) $(LINKS_INSERT) $(LINKS_INSERT_FLAGS)

.PHONY: links-insert

# Resolve a link id.
#
# This target resolves a database link identifier from a URI.

links-uri2id: $(NODE_MODULES)
	$(QUIET) $(LINKS_URI2ID) $(LINKS_URI2ID_FLAGS)

.PHONY: links-uri2id
