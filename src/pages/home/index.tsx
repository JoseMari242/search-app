import React, { useState, useEffect } from 'react';
import { ProductData, getProductsApi } from '../utils';


type Props = {};

const Home: React.FC<Props> = () => {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getProductsApi();
      if (data) {
        setProductData(data);
      } else {
        setError('Failed to fetch product data');
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Data</h1>
      <pre>{JSON.stringify(productData, null, 2)}</pre>
    </div>
  );
}

export default Home;
