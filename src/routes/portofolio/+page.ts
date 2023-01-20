import {error} from '@sveltejs/kit'
import type { PageLoad } from "./$types";

export const load = (() => {
    throw error (404, {
        message: "Couldn't found what youre lookin for man"
    });
    return {
        random: ['iig','waaa','twwt']
    }
}) satisfies PageLoad;