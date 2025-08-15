'use client';

import Loading from "@/components/loading";
import { useGoogleAuth } from "@/hooks/auth/useGoogleAuth";
import { useEffect } from "react";

export default function OauthSuccess () {
    
    const {oauthCallback} = useGoogleAuth()

    useEffect(() => {
        oauthCallback()
    }, [oauthCallback])

    return (
        <Loading/>
    )
}