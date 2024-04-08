import { useGetSelectedPostQuery } from '@/entities/post/api';
import { PostInfo } from '@/entities/post/ui';
import { Loader } from '@/shared/ui';
import React from 'react';
import { useParams } from 'react-router-dom';

export const Post: React.FC = () => {
    const { id } = useParams()
    const {
        data: post,
        isLoading,
        isSuccess
    } = useGetSelectedPostQuery(Number(id))

    return (
        <main>
            {isLoading &&
                <Loader
                    text='Загрузка поста...'
                />
            }
            {isSuccess &&
                <PostInfo post={post} />
            }
        </main>
    );
};
