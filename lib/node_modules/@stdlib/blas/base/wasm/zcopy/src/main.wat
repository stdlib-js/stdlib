;; @license Apache-2.0
;;
;; Copyright (c) 2025 The Stdlib Authors.
;;
;; Licensed under the Apache License, Version 2.0 (the "License");
;; you may not use this file except in compliance with the License.
;; You may obtain a copy of the License at
;;
;;    http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing, software
;; distributed under the License is distributed on an "AS IS" BASIS,
;; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;; See the License for the specific language governing permissions and
;; limitations under the License.

(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 i32 i32 i32 i32)))
  (type (;2;) (func (param i32 i32 i32 i32 i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32 i32 i32)
    (local i32 i32 i32 i32 i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      i32.const 1
      local.get 0
      i32.sub
      local.tee 5
      local.get 4
      i32.mul
      i32.const 1
      i32.shl
      i32.const 0
      local.get 4
      i32.const 0
      i32.le_s
      select
      local.set 6
      local.get 2
      local.get 5
      i32.mul
      i32.const 1
      i32.shl
      i32.const 0
      local.get 2
      i32.const 0
      i32.le_s
      select
      local.set 5
      local.get 0
      i32.const 1
      i32.ne
      if  ;; label = @2
        local.get 0
        i32.const 1
        i32.and
        local.set 10
        local.get 4
        i32.const 1
        i32.shl
        local.set 4
        local.get 2
        i32.const 1
        i32.shl
        local.set 2
        local.get 0
        i32.const 2147483646
        i32.and
        local.set 0
        loop  ;; label = @3
          local.get 3
          local.get 6
          i32.const 3
          i32.shl
          i32.add
          local.tee 7
          local.get 1
          local.get 5
          i32.const 3
          i32.shl
          i32.add
          local.tee 8
          f64.load
          f64.store
          local.get 7
          local.get 8
          f64.load offset=8
          f64.store offset=8
          local.get 3
          local.get 4
          local.get 6
          i32.add
          local.tee 6
          i32.const 3
          i32.shl
          i32.add
          local.tee 7
          local.get 1
          local.get 2
          local.get 5
          i32.add
          local.tee 5
          i32.const 3
          i32.shl
          i32.add
          local.tee 8
          f64.load
          f64.store
          local.get 7
          local.get 8
          f64.load offset=8
          f64.store offset=8
          local.get 4
          local.get 6
          i32.add
          local.set 6
          local.get 2
          local.get 5
          i32.add
          local.set 5
          local.get 9
          i32.const 2
          i32.add
          local.tee 9
          local.get 0
          i32.ne
          br_if 0 (;@3;)
        end
        local.get 10
        i32.eqz
        br_if 1 (;@1;)
      end
      local.get 3
      local.get 6
      i32.const 3
      i32.shl
      i32.add
      local.tee 0
      local.get 1
      local.get 5
      i32.const 3
      i32.shl
      i32.add
      local.tee 1
      f64.load
      f64.store
      local.get 0
      local.get 1
      f64.load offset=8
      f64.store offset=8
    end)
  (func (;2;) (type 2) (param i32 i32 i32 i32 i32 i32 i32)
    (local i32 i32 i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      local.get 6
      i32.const 1
      i32.shl
      local.set 6
      local.get 3
      i32.const 1
      i32.shl
      local.set 3
      local.get 0
      i32.const 1
      i32.ne
      if  ;; label = @2
        local.get 0
        i32.const 1
        i32.and
        local.set 9
        local.get 5
        i32.const 1
        i32.shl
        local.set 5
        local.get 2
        i32.const 1
        i32.shl
        local.set 2
        local.get 0
        i32.const 2147483646
        i32.and
        local.set 10
        i32.const 0
        local.set 0
        loop  ;; label = @3
          local.get 4
          local.get 6
          i32.const 3
          i32.shl
          i32.add
          local.tee 7
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          local.tee 8
          f64.load
          f64.store
          local.get 7
          local.get 8
          f64.load offset=8
          f64.store offset=8
          local.get 4
          local.get 5
          local.get 6
          i32.add
          local.tee 6
          i32.const 3
          i32.shl
          i32.add
          local.tee 7
          local.get 1
          local.get 2
          local.get 3
          i32.add
          local.tee 3
          i32.const 3
          i32.shl
          i32.add
          local.tee 8
          f64.load
          f64.store
          local.get 7
          local.get 8
          f64.load offset=8
          f64.store offset=8
          local.get 5
          local.get 6
          i32.add
          local.set 6
          local.get 2
          local.get 3
          i32.add
          local.set 3
          local.get 0
          i32.const 2
          i32.add
          local.tee 0
          local.get 10
          i32.ne
          br_if 0 (;@3;)
        end
        local.get 9
        i32.eqz
        br_if 1 (;@1;)
      end
      local.get 4
      local.get 6
      i32.const 3
      i32.shl
      i32.add
      local.tee 0
      local.get 1
      local.get 3
      i32.const 3
      i32.shl
      i32.add
      local.tee 1
      f64.load
      f64.store
      local.get 0
      local.get 1
      f64.load offset=8
      f64.store offset=8
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_zcopy" (func 1))
  (export "c_zcopy_ndarray" (func 2)))
