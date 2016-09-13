
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the path to the executable to list package dependencies:
LIST_PKGS ?= $(TOOLS_DIR)/ls/pkgs/bin/cli

# Define the command flags:
LIST_PKGS_FLAGS ?= \
	--dir $(ROOT_DIR)


# TARGETS #

# List package dependencies.
#
# This target prints a list of all package dependencies.

list-pkgs: $(NODE_MODULES) $(LIST_PKGS)
	$(QUIET) $(NODE) $(LIST_PKGS) $(LIST_PKGS_FLAGS)

.PHONY: list-pkgs
