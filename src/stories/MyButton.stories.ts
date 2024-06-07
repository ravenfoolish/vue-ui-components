import MyButton from "../components/MyButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyButton>;

const meta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
};

// 「ボタン」
export const Default: Story = {
    render: (args) => ({
      components: { MyButton },
      setup() {
        return { args };
      },
      template: "<MyButton v-bind='args' />",
    }),
    args: {
      label: "ボタン",
    },
  };
  
  // 「ログイン」
  export const Login: Story = {
    render: (args) => ({
      components: { MyButton },
      setup() {
        return { args };
      },
      template: "<MyButton v-bind='args' />",
    }),
    args: {
      label: "ログイン",
    },
  };
  
  // 「会員登録」
  export const SignUp: Story = {
    render: (args) => ({
      components: { MyButton },
      setup() {
        return { args };
      },
      template: "<MyButton v-bind='args' />",
    }),
    args: {
      label: "会員登録",
    },
  };

export default meta;