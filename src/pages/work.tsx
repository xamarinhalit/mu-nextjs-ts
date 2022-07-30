import Layout from '@/components/layout/layout';
import WorkListComponent from '@/components/work/workListComponent';
import * as React from 'react';

interface IWorkPageProps {
}

const WorkPage: React.FunctionComponent<IWorkPageProps> = (props) => {
  return(
    <Layout>
        <WorkListComponent></WorkListComponent>
    </Layout>
  )
};

export default WorkPage;
