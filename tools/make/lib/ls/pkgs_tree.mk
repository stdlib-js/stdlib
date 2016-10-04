
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the root directory from which to search for packages:
PACKAGES_DIR ?= $(ROOT_DIR)/lib/node_modules

# Define the path of the executable:
LIST_PACKAGE_TREE ?= $(TOOLS_DIR)/pkgs/tree/bin/cli

# Define the command flags:
LIST_PACKAGE_TREE_FLAGS ?= \
	--dir $(PACKAGES_DIR)


# TARGETS #

# List all packages.
#
# This target prints a list of all packages as a tree.

list-pkgs-tree: $(LIST_PACKAGE_TREE) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_TREE) $(LIST_PACKAGE_TREE_FLAGS)

.PHONY: list-pkgs-tree
