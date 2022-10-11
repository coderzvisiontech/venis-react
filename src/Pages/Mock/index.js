import React ,{useState,useEffect} from 'react';
import './style.css';
import logoImage from '../../imgSrc'

function Mock() {
  return (
    <section className='mockboard'>
    <div className="table-records-wrapper">
        <div className="tr-wrapper">
            <div className="tr-row-inner row">
                <div className="col-md-2 tab-list-wrapper">
                    <div className="tab-list-inner">
                        <div className="login-uname">
                            <img src={logoImage} alt="" />
                        </div>
                        <div className="tab-data-list">
                            <a href="#" className="list-tab active-tab"><i className="fa fa-pencil-square-o"></i> Mock Tests</a>
                            <a href="/login" className="list-tab"><i className="fa fa-sign-out"></i> Log Out</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 col-12 tab-recors-wrapper">
                    <div className="tab-records-inner">
                        <div className="records-headline d-flex flex-wrap justify-content-between align-items-center">
                            <h3>Mock Tests</h3>   
                        </div>
                        <div className="mock-tests-records">
                            <div className="table-header row">
                                <div className="col-md-9 mt-name-col">
                                    <h3 className="mt-title">Mock Tests</h3>
                                </div>
                                <div className="col-md-3 mt-action-col">
                                    <h3 className="mt-title">Action</h3>
                                </div>
                            </div>
                        </div>
                        <div className="table-data-structure">
                            
                            <div className="mt-table table-data row">
                                <div className="col-md-9">
                                    <h6 className="td-title">Mock Test 1</h6>
                                </div>
                                <div className="col-md-3 action-btn-col">
                                    <a href="#" className="purple-btn">Scores</a>
                                    <a href="#" className="purple-btn">Answers</a>
                                </div>
                            </div>
                            <div className="mt-table table-data row">
                                <div className="col-md-9">
                                    <h6 className="td-title">Mock Test 2</h6>
                                </div>
                                <div className="col-md-3 action-btn-col">
                                    <a href="#" className="purple-btn">Start Test</a>
                                </div>
                            </div>
                            <div className="mt-table table-data row">
                                <div className="col-md-9">
                                    <h6 className="td-title">Mock Test 3</h6>
                                </div>
                                <div className="col-md-3 action-btn-col">
                                    <a href="#" className="purple-btn">Start Test</a>
                                </div>
                            </div>
                            <div className="mt-table table-data row">
                                <div className="col-md-9">
                                    <h6 className="td-title">Mock Test 4</h6>
                                </div>
                                <div className="col-md-3 action-btn-col">
                                    <a href="#" className="purple-btn">Start Test</a>
                                </div>
                            </div>
                            <div className="mt-table table-data row">
                                <div className="col-md-9">
                                    <h6 className="td-title">Mock Test 5</h6>
                                </div>
                                <div className="col-md-3 action-btn-col">
                                    <a href="#" className="purple-btn">Start Test</a>
                                </div>
                            </div>
                            <div className="mt-table table-data row">
                                <div className="col-md-9">
                                    <h6 className="td-title">Mock Test 6</h6>
                                </div>
                                <div className="col-md-3 action-btn-col">
                                    <a href="#" className="purple-btn">Start Test</a>
                                </div>
                            </div>
                            <div className="mt-table table-data row">
                                <div className="col-md-9">
                                    <h6 className="td-title">Mock Test 7</h6>
                                </div>
                                <div className="col-md-3 action-btn-col">
                                    <a href="#" className="purple-btn">Start Test</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Mock