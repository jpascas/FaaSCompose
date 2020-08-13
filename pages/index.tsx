import Head from 'next/head';
import BasicFlow from '../components/FlowChart';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
import theme from '../components/Paperbase';
import Paperbase from '../components/Paperbase'

const Home = (): JSX.Element => {
  return (    
    <div>
      <Paperbase></Paperbase>
    </div>    
  );
};

export default Home;
