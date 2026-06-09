import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="flex items-center justify-center" style={{ height: "1.2em", fontSize: "clamp(2rem, 8vw, 5rem)" }}>
      <GooeyText
        texts={["OUR", "SPACE", "CAPSULE"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold w-full"
        textClassName="text-[1em] md:text-[1em]"
      />
    </div>
  );
}

export { GooeyTextDemo };
