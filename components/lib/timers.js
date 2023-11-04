import {
	useEffect,
	useState,
} from "react";

export function useNow(
	interval,
	enabled,
) {
	const [now, setNow] = useState();

	useEffect(() => {
		if (!enabled) {
			setNow(undefined);
			return;
		}

		const interID = setInterval(
			() => {
				setNow(Date.now());
			},
			interval,
		);

		return () => {
			clearInterval(interID);
		};
	}, [interval, enabled]);

	return now;
}

export function useInterval(
	interval,
	enabled,
	callback,
) {
	useEffect(() => {
		if (!enabled) {
			return;
		}

		const interID = setInterval(
			() => {
				callback(Date.now());
			},
			interval,
		);

		return () => {
			clearInterval(interID);
		};
		//TODO useCallback
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [interval, enabled]);
}
