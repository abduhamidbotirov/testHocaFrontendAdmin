import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';

const BASE_URL = 'https://hoca-test.onrender.com/';

const Posts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verileri GET isteğiyle çek
        axios.get(`${BASE_URL}api/posts`)
            .then((response) => {
                setData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='container'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="row">
                        {data.map((post) => (
                            <Card key={post._id} post={post} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Posts;
