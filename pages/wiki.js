import React from 'react';
import Head from 'next/head';

export default class Home extends React.Component {
    static async getInitialProps({query}){
        //Execute this on ServerSide
        return { query };
    }

    render(){
        const {lang, version} = this.props.query;
        return(
            <>
                <Head>
                    <title>ARTICLE {version}</title>
                </Head>
                <div>
                    <h1>WIKI-PAGE</h1>
                    language: {lang}<br/>
                    version: {version}
                </div>
            </>
        );
    }
}