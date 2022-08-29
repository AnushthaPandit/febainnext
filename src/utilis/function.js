import { useState, useEffect, useCallback } from "react";
//import moment from "moment";
//import ReactGA from "react-ga";
import config from "../configs";
//import request from "request";

export function buildUrl(url, parameters) {
	let qs = "";
	for (const key in parameters) {
		if (parameters.hasOwnProperty(key)) {
			const value = parameters[key];
			qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
		}
	}
	if (qs.length > 0) {
		qs = qs.substring(0, qs.length - 1);
		url = url + "?" + qs;
	}
	return url;
}

export function logUserActivity(api, token, vendorId, event) {
	var url = buildUrl(
		config.protocol +
			"://" +
			config.hostName +
			":" +
			config.serverPort +
			"/api/user/activity/" +
			api,
		{ token: token }
	);
	request.post(
		url,
		{ json: { vendorId: vendorId, event: event } },
		(err, res, body) => {
			return res.body.verified;
		}
	);

	// if (!token) {
	// 	let locallyStoredActivity = JSON.parse(localStorage.getItem("activities"));

	// 	let vals = [];

	// 	if (locallyStoredActivity) {
	// 		vals.push(...locallyStoredActivity);
	// 	}

	// 	vals.push({ api, token, json: { vendorId: vendorId, event: event } });

	// 	localStorage.setItem("activities", JSON.stringify(vals));
	// }
}

export const postAllLocalActivity = () => {
	// let locallyStoredActivity = JSON.parse(localStorage.getItem("activities"));
	// const activities = locallyStoredActivity ? [...locallyStoredActivity] : [];
	// for (let i = 0; i < activities.length; i++) {
	// 	const {
	// 		api,
	// 		token,
	// 		json: { vendorId, event },
	// 	} = activities[i];
	// 	var url = buildUrl(
	// 		config.protocol +
	// 			"://" +
	// 			config.hostName +
	// 			":" +
	// 			config.serverPort +
	// 			"/api/user/activity/" +
	// 			api,
	// 		{ token: token }
	// 	);
	// 	request.post(
	// 		url,
	// 		{ json: { vendorId: vendorId, event: event } },
	// 		(err, res, body) => {
	// 			return res.body.verified;
	// 		}
	// 	);
	// }
	// localStorage.removeItem("activities");
};

export function logPageView() {
	ReactGA.set({ path: window.location.pathname + window.location.search });
	ReactGA.pageview(window.location.pathname + window.location.search);
}

export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(
		() => window.matchMedia(query).matches
	);

	useEffect(() => {
		const queryList = window.matchMedia(query);
		setMatches(queryList.matches);

		const listener = (evt) => setMatches(evt.matches);

		queryList.addListener(listener);
		return () => queryList.removeListener(listener);
	}, [query]);

	return matches;
};

export function useModalState(defaultValue = false) {
	const [isOpen, setIsOpen] = useState(defaultValue);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	return { isOpen, open, close };
}

export const checkIfScrolled = () => {
	const windowHeight =
		"innerHeight" in window
			? window.innerHeight
			: document.documentElement.offsetHeight;
	const body = document.body;
	const html = document.documentElement;
	const docHeight = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight
	);
	const windowBottom = windowHeight + window.pageYOffset;

	if (windowBottom >= docHeight) {
		return "Scrolled till The Bottom!";
	} else {
		return "Scrolled!";
	}
};

export function addCommas(nStr) {
	nStr += "";
	var x = nStr.split(".");
	var x1 = x[0];
	var x2 = x.length > 1 ? "." + x[1] : "";
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, "$1" + "," + "$2");
	}
	return x1 + x2;
}

//objects of array must contain time property
//eg: [ { time: '2017-10-04T12:35:30+00:00' } ]
export function GroupDataByDate(data) {
	const groups = data.reduce((prev, current) => {
		const date = current.time.split("T")[0];

		if (!prev[date]) {
			prev[date] = [];
		}

		prev[date].push(current);
		return prev;
	}, {});

	const groupArrays = Object.keys(groups).map((date) => {
		return {
			date,
			data: groups[date],
		};
	});

	return groupArrays;
}

export const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
		reader.readAsDataURL(file);
	});
};

export const geFormmatedDateFromCalendarObj = (date) => {
	return moment({
		...date,
		month: date.month - 1,
	}).format("DD-MM-YYYY");
};

export const getCookie = (cname) => {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

const fallbackCopyTextToClipboard = (text) => {
	var textArea = document.createElement("textarea");
	textArea.value = text;

	// Avoid scrolling to bottom
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	var successful = document.execCommand("copy");

	document.body.removeChild(textArea);

	if (successful !== "successful") {
		throw new Error("Copying Failed!");
	}
};
export const copyTextToClipboard = (text) =>
	new Promise((resolve, reject) => {
		if (!navigator.clipboard) {
			fallbackCopyTextToClipboard(text);
			resolve();
			return;
		}
		navigator.clipboard.writeText(text).then(
			function () {
				console.log("Async: Copying to clipboard was successful!");
				resolve();
			},
			function (err) {
				console.error("Async: Could not copy text: ", err);
				reject(err);
			}
		);
	});
