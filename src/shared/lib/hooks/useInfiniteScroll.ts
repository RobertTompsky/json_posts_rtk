import { useEffect } from "react";
import { Params } from "../types";

export const useInfiniteScroll = (
    params: Params,
    isFetching: boolean,
    setParams: React.Dispatch<React.SetStateAction<Params>>
) => {
    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;
            if (scrolledToBottom && !isFetching) {
                setParams((prevParams) => ({
                    ...prevParams,
                    start: prevParams.start + 1
                }));
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [params.start, isFetching]);
};
