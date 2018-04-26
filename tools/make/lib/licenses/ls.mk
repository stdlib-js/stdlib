#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# RULES #

#/
# Lists the license for each package dependency in the package dependency tree.
#
# @example
# make list-licenses
#/
list-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER)

.PHONY: list-licenses

#/
# Groups the licenses of package dependencies by license type.
#
# @example
# make list-licenses-group
#/
list-licenses-group: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_GROUP)

.PHONY: list-licenses-group

#/
# Lists the license for each root package dependency.
#
# @example
# make list-deps-licenses
#/
list-deps-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_DEPS)

.PHONY: list-deps-licenses

#/
# Lists package dependencies missing license information.
#
# @example
# make list-missing-licenses
#/
list-missing-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_NO_LICENSE)

.PHONY: list-missing-licenses

#/
# Lists package dependencies having ambiguous license information (e.g., conflicting or unknown licenses).
#
# @example
# make list-ambiguous-licenses
#/
list-ambiguous-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_AMBIGUOUS)

.PHONY: list-ambiguous-licenses

#/
# Lists package dependencies having excluded license information (as determined by a license whitelist).
#
# @example
# make list-excluded-licenses
#/
list-excluded-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_EXCLUDED) \
		--exclude $(LICENSES_WHITELIST)

.PHONY: list-excluded-licenses

#/
# Prints a summary of package dependency license information.
#
# @example
# make list-licenses-summary
#/
list-licenses-summary: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_SUMMARY)

.PHONY: list-licenses-summary
