import {useCallback, useState} from "react";

export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const formEventHandler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, formEventHandler];
}