
# VARIABLES #

# Define the path of the executable:
LIST_PACKAGE_ADDONS ?= $(TOOLS_PKGS_DIR)/pkgs/addons/bin/cli

# Define the command flags:
LIST_PACKAGE_ADDONS_FLAGS ?=


# TARGETS #

# List all add-ons.
#
# This target prints a list of all add-ons.

list-pkgs-addons: $(LIST_PACKAGE_ADDONS) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_ADDONS) $(LIST_PACKAGE_ADDONS_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-addons
