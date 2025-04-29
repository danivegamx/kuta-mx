import {getRequestConfig} from "next-intl/server";
import {cookies} from "next/headers";

export default getRequestConfig(async()=>{
    const cookieLocale = (await cookies()).get("KUTAAPP_LOCALE")?.value || "es";
    
    return {
        locale: cookieLocale,
        messages: (await import(`../messages/${cookieLocale}.json`)).default
    }
})