
# VARIABLES #

# Define the path of the executable:
LIST_PACKAGE_TREE ?= $(TOOLS_PKGS_DIR)/pkgs/tree/bin/cli

# Define the command flags:
LIST_PACKAGE_TREE_FLAGS ?=


# TARGETS #

# List all packages.
#
# This target prints a list of all packages as a tree.

list-pkgs-tree: $(LIST_PACKAGE_TREE) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_TREE) $(LIST_PACKAGE_TREE_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-tree
