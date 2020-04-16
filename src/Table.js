import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Case Number',
    selector: 'caseNo',
    sortable: true,
  },
  {
    name: 'Patient',
    selector: 'patient',
    sortable: true,
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
  },
  {
    name: 'Gender',
    selector: 'gender',
    sortable: true,
  },
  {
    name: 'Nationality',
    selector: 'nationality',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
  },
  {
    name: 'Cluster',
    selector: 'cluster',
    sortable: true,
  },
  {
    name: 'Source of Infection',
    selector: 'infectionSource',
    sortable: true,
  },
  {
    name: 'Country of Origin',
    selector: 'countryOfOrigin',
    sortable: true,
  },
  {
    name: 'Symptomatic to Confirmation',
    selector: 'symptomaticToConfirmation',
    sortable: true,
  },
  {
    name: 'Days To Recover',
    selector: 'daysToRecover',
    sortable: true,
  },
  {
    name: 'Symptomatic At',
    selector: 'symptomaticAt',
    sortable: true,
  },
  {
    name: 'Displayed Symptoms?',
    selector: 'displayedSymptoms',
    sortable: true,
  },
];

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
    this.updateTable = this.updateTable.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.mapData.length !== prevProps.mapData.length) {
      // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
      this.updateTable();
    }
  }

  updateTable() {
    if (this.props.mapData.length !== 0) {
      this.props.mapData['features'].map((e) => {
        this.state.tableData.push(...e['properties'].cases);
      });
    }
  }

  //   const data = [
  //     {
  //       caseNo: 1379,
  //       patient: '37 Year Old Male Bangladeshi',
  //       age: 37,
  //       gender: 'Male',
  //       nationality: 'Bangladeshi',
  //       status: 'In hospital',
  //       infectionSource: 'Local transmission',
  //       countryOfOrigin: 'Unclear origin',
  //       symptomaticToConfirmation: '-',
  //       daysToRecover: '-',
  //       symptomaticAt: '-',
  //       confirmedAt: '7th, Apr 2020',
  //       recoveredAt: '-',
  //       displayedSymptoms: 'true',
  //       cluster: 'Shaw Lodge (12 Shaw Road)',
  //     },
  //   ];
  render() {
    return (
      <DataTable
        title="SG COVID-19 Clusters"
        columns={columns}
        data={this.state.tableData}
        overflowY={true}
      />
    );
  }
}
