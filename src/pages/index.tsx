import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';
import {
  IRootState, IUserProps, IUserState,
} from '../interfaces';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { userDetailRequest } from '../action';


class Home extends Component<IUserProps, IUserState> {
  constructor(props: IUserProps) {
    super(props);
    this.state = {
     

    };
  }

  componentDidMount = () => {

    this.props.getData();
  };


  render() {
    const { userReducer } = this.props;

    return (
      <Card >
        <Card.Body>
          <Card.Title>User List</Card.Title>
          <Table >
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {userReducer && userReducer.userData.length ? (
                userReducer.userData.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="text-center"></td>
                      <td className="text-left">
                        
                            {item.name
                              ? item.name 
                              : "-"}
                     </td><td>
                            {item.email ? item.email : "-"}
                          
                      </td>
                    </tr>
                  );
                })
              ) : (
                  <tr>
                    <td className={"text-center"}>
                      No User Found
                      </td>
                  </tr>
                )}
            </tbody>
          </Table>

        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps: any = (state: IRootState) => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getData: () => {
      dispatch(userDetailRequest());
    },

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
