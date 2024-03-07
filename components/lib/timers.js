import {useEffect, useState} from 'react';

export function useTimerChange(
    initialTimer,
    isActive,
    onTimeIsOver,
    onTimeChange,
    profile,
    isStateUpdated
) {
    const [seconds, setSeconds] = useState(initialTimer);

    useEffect(() => {
        if (!isActive) return;
        debugger;
        let currentSeconds = isStateUpdated
            ? initialTimer
            : seconds;
        const interID = setInterval(() => {
            currentSeconds = Math.max(currentSeconds - 0.1, 0);
            setSeconds(currentSeconds);
            if (!currentSeconds) {
                onTimeIsOver();
            }
        }, 100);

        return () => {
            onTimeChange(currentSeconds, profile.symbol);
            clearInterval(interID);
        };
    }, [isActive]);
    return seconds;
}
