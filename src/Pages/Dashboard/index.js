import React from 'react'
import './style.css';

function Dashboard() {
  return (
    <div>
    <section>
    <div className="table-records-wrapper">
        <div className="tr-wrapper">
            <div className="tr-row-inner row">
                <div className="col-md-2 tab-list-wrapper">
                    <div className="tab-list-inner">
                        <div className="login-uname">
                        </div>
                        <div className="tab-data-list">
                            <a href="#" className="list-tab active-tab"><i className="fa fa-user"></i> Users</a>
                            <a href="#" className="list-tab"><i className="fa fa-sign-out"></i> Log Out</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 col-12 tab-recors-wrapper">
                    <div className="tab-records-inner">
                        <div className="records-headline d-flex flex-wrap justify-content-between">
                            <h3>Students</h3>   
                            <div className="button-wrapper">
                                <a href="/login" className="purple-btn">+ Add Students</a>
                            </div>
                        </div>
                        <div className="record-list-wrapper">
                            <div className="record-filters">
                                <div className="records-list">
                                    <div className="records-list-inner d-flex">
                                        <div className="rc-wrapper">
                                            <h4>Total Students <span className="count-students">258</span></h4>
                                        </div>
                                        <div className="form-group has-search">
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                        <div className="rc-right">
                                            <a href="#" className="rc-minus-icon">-</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="table-header row">
                                    <div className="col-md-1">
                                        <h5 className="column-title">ID</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="column-title">Username</h5>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="column-title">Password</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <h5 className="column-title">Created Date</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <h5 className="column-title">Expiry Date</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="table-data-structure">
                               
                                <div className="table-data row">
                                    <div className="col-md-1">
                                        <h6 className="td-title">1</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="td-title">Vansabadhok</h6>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="d-block td-pass">vansh@4577</span>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="d-block td-cdate">05/10/2022</span>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="d-block td-edate">05/11/2022</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Dashboard