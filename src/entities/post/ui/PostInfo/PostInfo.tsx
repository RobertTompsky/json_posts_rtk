import styles from './PostInfo.module.scss'
import { Post } from '../../model';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/lib/config/routeConfig';
import { Button } from '@/shared/ui';

export const PostInfo = ({ post }: { post: Post }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.postInfo}>
            <h1>{post?.title}</h1>
            <div className={styles.ids}>
                <h2>Пост №{post?.id}</h2>
                <h2>ID автора: {post?.userId}</h2>
            </div>
            <p>{post?.body}</p>
            <Button
                onClick={() =>
                    navigate(`${RoutePath.main}`)
                }
                children='Назад'
            />
        </div>
    );
};