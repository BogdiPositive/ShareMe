import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'bptdiir9',
    dataset: 'production',
    apiVersion: '2021-11-06',
    useCdn: true,
    token: 'skdF5Rb2ug5ByWC302Mighly7oe8sXAgriVyK1cLsA7uIRy8BTIxAu3P3kpeDn0710xjfkjxYn4roOfvFh9Q3YHkTwWVPLfj9eupiWsDvKXkWHagvBVaqN4P2Q2Q1CEveNVKCYcQti7ZkoWgy1nDuuRxqQVFcrjElmVnH6EnA4OptPpY4lGt'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);