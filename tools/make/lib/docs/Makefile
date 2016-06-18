
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/docs/src.mk
include $(TOOLS_MAKE_LIB_DIR)/docs/eqns.mk

# TARGETS #

# Generate documentation.
#
# This target runs tasks to generate documentation.

docs: src-docs

.PHONY: docs


# Remove generated documentation.
#
# This target cleans generated documentation by removing it entirely.

clean-docs: clean-src-docs

.PHONY: clean-docs


# Generate equations.
#
# This target inserts DIVs and generates SVG files for all equations in Markdown file.

equations: generate-equations

.PHONY: equations

# Insert rawgit source URLs.
#
# This target inserts rawgit source URLs for all equations in Markdown files.

equations-urls: insert-equation-src-urls

.PHONY: equations
