import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            error: null
        };

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                })
                .catch((error) => {
                    this.setState({
                        error
                    });
                })
            ;
        }

        render() {
            const {data, error} = this.state;

            if (!data) {
                return <Spinner />;
            }

            if (error) {
                return <ErrorIndicator />;
            }

            return <View {...this.props} data={data} />;
        }
    };
};

export default withData;
