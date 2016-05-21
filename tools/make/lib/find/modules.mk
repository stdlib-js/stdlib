
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	MODULES ?= $(shell find -E $(ROOT) \
		-name "package.json" \
		-regex "$(MODULES_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
		-exec dirname {} \; \
	)
else
	MODULES ?= $(shell find $(ROOT) \
		-name "package.json" \
		-regextype posix-extended \
		-regex "$(MODULES_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
		-exec dirname {} \; \
	)
endif


# TARGETS #

# List all modules.
#
# This target prints a list of all modules, excluding the `node_modules`, `build`, and `reports` directories.

list-modules:
	@printf '%s\n' $(MODULES)


.PHONY: list-modules
