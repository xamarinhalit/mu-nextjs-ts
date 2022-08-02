import React, { FC, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import { WorkService } from '@/services/workService';
import { WorkItem } from '@/contracts/IWork';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 230 },
  { field: 'lastName', headerName: 'Last name', width: 230 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 70,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const WorkListDiv = styled("div")({
  height: 400, width: '100vw'
})
interface WorkListProps {
  items: WorkItem[]
}
const WorkListComponent: FC<WorkListProps> = ({ items }) => {
  return (<>
    <WorkListDiv>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </WorkListDiv>
  </>
  );
}

export default WorkListComponent
