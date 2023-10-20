import { Preview } from "@storybook/react";
import { Theme } from "../src/Theme";
import { ScreenOverlay } from "../src/components/ScreenOverlay";

const preview: Preview = {
    decorators: [
        (Story) => (
            <Theme>
                <ScreenOverlay style={{padding: 10}}>
                    <Story />
                </ScreenOverlay>
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