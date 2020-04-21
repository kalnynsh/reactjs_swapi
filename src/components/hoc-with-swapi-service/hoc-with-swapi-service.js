import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        return (
                            <Wrapped
                                {...props}
                                {...mapMethodsToProps(swapiService)}
                            />
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    };
};

export default withSwapiService;
