import { useState, useCallback } from "react";

const useModal = (initialState = false) => {
	const [isOpen, setIsOpen] = useState(initialState);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	return { isOpen, open, close };
};

export default useModal;
