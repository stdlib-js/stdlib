
# VARIABLES #

# Define the path of the executable:
LIST_PACKAGE_NAMESPACES ?= $(TOOLS_PKGS_DIR)/pkgs/namespaces/bin/cli

# Define the command flags:
LIST_PACKAGE_NAMESPACES_FLAGS ?=


# TARGETS #

# List all package namespaces.
#
# This target prints a list of all package namespaces.

list-pkgs-namespaces: $(LIST_PACKAGE_NAMESPACES) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_NAMESPACES) $(LIST_PACKAGE_NAMESPACES_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-namespaces
