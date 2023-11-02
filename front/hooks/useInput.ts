import { useCallback, useState } from 'react';

export default (initialValue = null) => {
  const [value, setter] = useState(initialValue);
  const formEventHandler = useCallback((e) => {
    setter(e.target.value);
  }, []);

  return [value, formEventHandler, setter];
};
