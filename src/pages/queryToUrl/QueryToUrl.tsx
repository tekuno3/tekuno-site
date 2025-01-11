import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function QueryToUrl() {
    const [query] = useSearchParams();
    const navigate = useNavigate();
    const url = ['/', query.get('url') ?? ''].join('');
    
    useEffect(
        () => navigate(url, { replace: true, }),
        []
    );

    return (
        <>TEST: {url}</>
    );
}
