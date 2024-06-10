import { Decorator, Parameters } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import pinia, { useCurrentUserStore } from "../src/pinia";
export const parameters: Parameters = {};

setup((app) => {

    app.use(pinia);

});

export const decorators: Decorator[] = [
  (story, context) => {
    return {
      // ここを追加
      setup() {
        const currentUserStore = useCurrentUserStore();
        currentUserStore.$reset();
      },
      template: "<story />",
    };
  },
];