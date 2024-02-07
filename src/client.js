import {createClient} from "@sanity/client";

export const client = createClient({
    projectId: 'dqt024i4',
    dataset: 'production'
})
