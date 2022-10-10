import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './style.css';

function Dashboard() {
    const [students,setStudents]=useState();
    const [total,setTotal]=useState();

    useEffect(() => {
            axios.post("http://44.204.12.25:3200/api/v1/students/list").then((response) => {
                setTotal(response.data.data[0].total);
                setStudents(response.data.data[0].result);
                console.log(response.data.data[0].result);
            });
    }, []);

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
                                            <h4>Total Students <span className="count-students">{total}</span></h4>
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
                            {students &&
                students.map(({ username,userId,password,createdAt,expiredAt }) => (
                                <div className="table-data row">
                                
                                    <div className="col-md-1">
                                        <h6 className="td-title">{userId}</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="td-title">{username}</h6>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="d-block td-pass">{password}</span>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="d-block td-cdate"><Moment format='DD/MM/YYYY'>{createdAt}</Moment></span>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="d-block td-edate"><Moment format='DD/MM/YYYY'>{expiredAt}</Moment></span>
                                    </div>
                                </div>
                                ))}
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