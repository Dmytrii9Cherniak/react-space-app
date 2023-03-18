import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';

export const LAUNCHES_QUERY = gql`
  query ExampleQuery {
    rockets {
        id
        description
        name
    }
  }`;

const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/',
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <RecoilRoot>
                <App/>
            </RecoilRoot>
        </ApolloProvider>
    </BrowserRouter>
);

