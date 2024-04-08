import { Post } from '../../model';
import { truncate } from 'lodash'
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/lib/config/routeConfig';
import styles from './PostCard.module.scss'
import { Button } from '@/shared/ui';

export const PostCard = ({ post }: { post: Post }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.postCard}>
            <h1>{post.id}. {post.title}</h1>
            <p>{truncate(post.body, { length: 170 })}</p>
            <Button
                children='Просмотр'
                onClick={() => navigate(`${RoutePath.post}/${post.id}`)}
            />
        </div>
    );
};
