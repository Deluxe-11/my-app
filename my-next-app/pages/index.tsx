import type { NextPage } from 'next';
import Layout from '@src/components/Layout';
import CardCourse from '@src/components/CardCourse';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-center mt-10">
          <CardCourse />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
