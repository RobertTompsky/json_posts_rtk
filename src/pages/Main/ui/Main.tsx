import { useGetPostsQuery } from '@/entities/post/api';
import { PostCard } from '@/entities/post/ui';
import { useInfiniteScroll } from '@/shared/lib/hooks';
import { Params } from '@/shared/lib/types';
import { Loader } from '@/shared/ui';
import React, { useState } from 'react';

export const Main: React.FC = () => {
    const [params, setParams] = useState<Params>({
        start: 0,
        limit: 5
    })

    const {
        data: posts,
        isLoading,
        isSuccess,
        isFetching
    } = useGetPostsQuery(params)

    useInfiniteScroll(params, isFetching, setParams)
    
    return (
        <main>
            {isLoading &&
                <Loader
                    text='Загрузка постов...'
                />
            }
            {isSuccess &&
                <div>
                    {posts?.map((post) => (
                        <PostCard
                            post={post}
                            key={post.id}
                        />
                    ))}
                </div>
            }
        </main>
    );
};
