import type { SetupContext } from "vue";

import { renderSlot, defineComponent } from "vue";
import "./style.css";

const Space = defineComponent({
  name: "LeSpace",
  setup(props, { slots }: SetupContext) {
    return () => {
      const children = renderSlot(slots, "default", { key: 0 }, () => []);

      if (!children.children) return children;

      return (
        <div class={"space"}>
          {(children.children as any[]).map((_) => {
            return (
              <div
                class="space__item"
                style={{ paddingBottom: "8px", marginRight: "8px" }}
              >
                {_}
              </div>
            );
          })}
        </div>
      );
    };
  },
});

export default Space;
