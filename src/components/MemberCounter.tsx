import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getMemberCount } from "@/lib/tyc.functions";

export function MemberCounter() {
  const fetchCount = useServerFn(getMemberCount);
  const { data } = useQuery({
    queryKey: ["member-count"],
    queryFn: () => fetchCount(),
  });

  const target = data?.count ?? 100;
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!target || startedRef.current) return;
    startedRef.current = true;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <span
      className="font-display font-bold tabular-nums"
      style={{ color: "#080028", fontSize: "clamp(80px, 14vw, 180px)", lineHeight: 1, letterSpacing: "-0.04em" }}
      aria-live="polite"
    >
      {display.toLocaleString()}+
    </span>
  );
}
