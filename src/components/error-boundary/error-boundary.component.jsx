import React from 'react';
import { ErrorBoundaryOverlay, ErrorBoundaryImage } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { isError: true };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        return (
            <React.Fragment>
                { 
                    this.state.isError ? (
                        <ErrorBoundaryOverlay>
                            <ErrorBoundaryImage imageUrl="https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/25-Outstanding-404-Page-Examples-You-Have-to-See-760x400.png" />
                        </ErrorBoundaryOverlay>
                    ) : this.props.children
                }
            </React.Fragment>
        );
    }
}

export default ErrorBoundary;