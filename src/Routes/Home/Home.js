import React, { Component, Suspense } from 'react'
import './index.scss'
import Header from '../../Components/Header'
import SearchSection from './children/SearchSection'
import GenereSection from './children/GenereSection'
import { Spin } from 'antd'
import { getSearchText } from './helper'
const MainBlock = React.lazy(() => import('./children/MainContent'))


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  switchLoading = (value) => {
    this.setState({
      loading: value
    })
  }

  render() {
    return (
      <Suspense fallback={<div><Spin spinning={true} /></div>}>
        <div className='loading-section'>
          <Spin spinning={this.state.loading}>
            <Header />
            <SearchSection isGenreSelected={this.props.selectedGenere} searchTextValue={getSearchText(this.props)} switchLoading={(value) => this.switchLoading(value)} />
            <GenereSection switchLoading={(value) => this.switchLoading(value)} />
            <MainBlock />
          </Spin>
        </div>
      </Suspense>
    )
  }
}
