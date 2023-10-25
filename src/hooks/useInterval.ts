import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, ms: number, enabled: boolean = true) {
    const stored = useRef({ cb: callback });
    const lastTimer = useRef<any>();

    function stopTimer() {
        if (lastTimer.current) {
            clearInterval(lastTimer.current);
            lastTimer.current = undefined;
        }
    }

    function startTimer(ms: number) {
        stopTimer();
        setInterval(() => {
            stored.current.cb();
        }, ms);
    }

    useEffect(() => {
        stored.current = {
            cb: callback
        };
    }, [
        callback
    ]);

    useEffect(() => {
        if (enabled) {
            startTimer(ms);
        } else {
            stopTimer();
        }
    }, [enabled, ms]);
}