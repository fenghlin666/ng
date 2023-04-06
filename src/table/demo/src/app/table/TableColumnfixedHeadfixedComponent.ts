import { Component } from '@angular/core';
import { TiTableColumns, TiTableRowData, TiTableSrcData } from '@opentiny/ng';

@Component({
  templateUrl: './table-columnfixed-headfixed.html'
})
export class TableColumnfixedHeadfixedComponent {
  displayedData: Array<TiTableRowData> = [];
  srcData: TiTableSrcData = {
    data: [
      {
        id: '1',
        firstName: 'Pierre',
        lastName: 'Dupont',
        age: 20,
        email: 'Pierre@example.com',
        address: 'New York No. 1 Lake Park'
      },
      {
        id: '2',
        firstName: 'Jacques',
        lastName: 'Germain',
        age: 42,
        email: 'Jacques@example.com',
        address: 'Sidney No. 1 Lake Park'
      },
      {
        id: '3',
        firstName: 'Robert',
        lastName: 'Delcourt',
        age: 15,
        email: 'Robert@example.com',
        address: 'London No. 1 Lake Park'
      },
      {
        id: '4',
        firstName: 'Elisa',
        lastName: 'Menez',
        age: 36,
        email: 'Elisa@example.com',
        address: 'Los Angeles No. 1 Lake Park'
      },
      {
        id: '5',
        firstName: 'Pol',
        lastName: 'Dupont',
        age: 22,
        email: 'Pol@example.com',
        address: 'Los Angeles No. 1 Lake Park'
      },
      {
        id: '6',
        firstName: 'Adelina',
        lastName: 'Germain',
        age: 30,
        email: 'Adelina@example.com',
        address: 'London No. 1 Lake Park'
      },
      {
        id: '7',
        firstName: 'Abner',
        lastName: 'Delcourt',
        age: 29,
        email: 'Abner@example.com',
        address: 'Los Angeles No. 1 Lake Park'
      },
      {
        id: '8',
        firstName: 'Emma',
        lastName: 'Menez',
        age: 48,
        email: 'Emma@example.com',
        address: 'Sidney No. 1 Lake Park'
      }
    ],
    state: undefined
  };
  columns: Array<TiTableColumns> = [
    {
      title: 'Id',
      fixed: 'left',
      width: '100px'
    },
    {
      title: 'First Name',
      fixed: 'left',
      width: '200px'
    },
    {
      title: 'Last Name',
      fixed: 'left',
      width: '200px'
    },
    {
      title: 'Age',
      width: '250px'
    },
    {
      title: 'Email Address',
      width: '400px'
    },
    {
      title: 'Address',
      width: '400px'
    },
    {
      title: 'Action',
      fixed: 'right',
      width: '150px'
    }
  ];
}
