import Layout from '@/components/layout/layout';
import WorkListComponent from '@/components/work/workListComponent';
import { WorkItem } from '@/contracts/IWork';
import { WorkService } from '@/services/workService';
import { GetServerSideProps } from 'next/types';
import * as React from 'react';

interface IWorkPageProps {
  items: WorkItem[]
}

const WorkPage: React.FunctionComponent<IWorkPageProps> = ({items}) => {
  return(
    <Layout>
        <WorkListComponent items={items}></WorkListComponent>
    </Layout>
  )
};

export default WorkPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tempItems:WorkItem[] =[
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]
  tempItems.forEach(function (item: WorkItem) {
    WorkService.addWork(item);
  })
  return {
    props: {
      items:WorkService.getList()
    }, // will be passed to the page component as props
  }
};