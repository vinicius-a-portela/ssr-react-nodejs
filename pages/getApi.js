import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

export default class Home extends React.Component {
    static async getInitialProps({query}){
        //Execute this on ServerSide
        const res = await fetch('http://localhost:3000/api'); 
        const data = await res.json();

        return{data: data}
    }

    render(){
        //const {lang, version} = this.props.query;
        var props = this.props;
        return(
            <>
                <Head>
                    <title>{props.data.title}</title>
                </Head>
                desc: {props.data.desc}
            </>
        );
    }
}