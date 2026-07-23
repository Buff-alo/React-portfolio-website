import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
                    <div className="text-center max-w-md">
                        <div className="text-6xl mb-6">😕</div>
                        <h1 className="text-2xl font-medium mb-4">Something went wrong</h1>
                        <p className="text-gray-400 mb-8">
                            We're sorry, but something unexpected happened. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
