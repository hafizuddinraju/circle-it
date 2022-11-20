import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Circle IT`;
    }, [title])
};

export default useTitle;