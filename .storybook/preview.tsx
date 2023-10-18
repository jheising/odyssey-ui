import { Preview } from "@storybook/react";
import { Theme } from "../src/Theme";

const preview: Preview = {
    decorators: [
        (Story) => (
            <Theme>
                <Story />
            </Theme>
        )
    ],
    parameters: {
        backgrounds: {
            default: "slate",
            values: [
                {
                    name: "slate",
                    value: "#1B3B5C"
                }
            ]
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;