import Vue from 'vue';
// 使用する機能
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate';
// エラーメッセージの日本語化用
import ja from 'vee-validate/dist/locale/ja.json';
// 全てのバリデーションルール
import * as rules from 'vee-validate/dist/rules';

// forループで全てのバリデーションルールをextendで登録する
for (let rule in rules) {
  extend(rule, rules[rule]);
}

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
localize('ja', ja);