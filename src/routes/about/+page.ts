import type { PageLoad } from "./$types";

export const load = (() => {
    return {
        socials: ['ig','wa','twt']
    }
}) satisfies PageLoad;