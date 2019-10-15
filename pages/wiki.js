import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

export default class Home extends React.Component {
    static async getInitialProps({query}){
        //Execute this on ServerSide
        const res = await fetch('http://localhost:'+ (process.env.PORT || 5000) + '/api'); 
        const data = await res.json();

        return{ data, query }
    }

    render(){
        const { lang, version } = this.props.query;
        const { title } = this.props.data
        return(
            <>
                <Head>
                    <title>{title}</title>
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