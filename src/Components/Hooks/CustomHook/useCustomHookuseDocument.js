import {useEffect} from "react";

function useCustomHookuseDocument(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useCustomHookuseDocument;
