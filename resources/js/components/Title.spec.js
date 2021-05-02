import { mount } from "@vue/test-utils";
import Title from "./Title.vue";

describe("Title.vue", () => {
    it("Displays message", () => {
        const wrapper = mount(Title, {
            propsData: {
                msg: "Hello world"
            }
        });
        expect(wrapper.text()).toContain("Hello world");
    });
});
