import { useState, useEffect } from 'react';

type Post = {
    content: {
        rendered,
    },
    title: {
        rendered,
    },
};

export const NeedAndGive = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://test-denverchurch.site/wp-json/wp/v2/ng-post')
            .then((data) => data.json()
            .then((posts) => setPosts(posts)));
    }, []);


    return (
        <div>
            {posts.map(({ content: { rendered: contentRendered }, title: { rendered: titleRendered }}) =>
                <div>
                    <h2>{titleRendered}</h2>
                    {contentRendered}
                </div>)}
        </div>
    )
}