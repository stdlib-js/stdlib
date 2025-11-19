;; @license Apache-2.0
;;
;; Copyright (c) 2024 The Stdlib Authors.
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
  (type (;1;) (func (param i32 i32 i32 i32 i32 f32 f32)))
  (type (;2;) (func (param i32 i32 i32 i32 i32 i32 i32 f32 f32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32 i32 i32 f32 f32)
    local.get 0
    local.get 1
    local.get 2
    i32.const 1
    local.get 0
    i32.sub
    local.tee 0
    local.get 2
    i32.mul
    i32.const 0
    local.get 2
    i32.const 0
    i32.le_s
    select
    local.get 3
    local.get 4
    local.get 0
    local.get 4
    i32.mul
    i32.const 0
    local.get 4
    i32.const 0
    i32.le_s
    select
    local.get 5
    local.get 6
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32 i32 i32 i32 f32 f32)
    (local i32 i32 f32 f32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      loop  ;; label = @2
        local.get 0
        local.get 9
        i32.eq
        br_if 1 (;@1;)
        local.get 4
        local.get 6
        i32.const 2
        i32.shl
        i32.add
        local.tee 10
        local.get 7
        local.get 10
        f32.load
        local.tee 11
        f32.mul
        local.get 8
        local.get 1
        local.get 3
        i32.const 2
        i32.shl
        i32.add
        local.tee 10
        f32.load
        local.tee 12
        f32.mul
        f32.sub
        f32.store
        local.get 10
        local.get 7
        local.get 12
        f32.mul
        local.get 8
        local.get 11
        f32.mul
        f32.add
        f32.store
        local.get 9
        i32.const 1
        i32.add
        local.set 9
        local.get 5
        local.get 6
        i32.add
        local.set 6
        local.get 2
        local.get 3
        i32.add
        local.set 3
        br 0 (;@2;)
      end
      unreachable
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_srot" (func 1))
  (export "c_srot_ndarray" (func 2)))
