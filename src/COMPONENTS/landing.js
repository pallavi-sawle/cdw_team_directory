import React, { useState, useEffect } from 'react'

const Landingpage = () => {

    const [data, setData] = useState([]);


    const displayData = async () => {
        let newdata = await fetch("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098")
            .then(response => response.json([]));
        setData(newdata)
        console.log(newdata);
    }

    useEffect(() => {
        displayData();
    }, [1])

    const adminData = data.filter(item => item.role === "admin");
    const memberData = data.filter(item => item.role === "member");

    return (
        <div className='container app-wrapper mt-3 mb-3'>
            <h4 className='text-secondary mb-3'> Administrators </h4>
            <div className='row'>
                {
                    adminData.map((item, index) => {
                        return (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-6 mb-3'>
                                <div className='card shadow hovercursor' >
                                    <div className='card-body d-flex align-items-center'>
                                        <img src={item.img} className='rounded-circle' style={{ width: '50px', height: '50px' }} />

                                        <div className='text-right offset-1'>
                                            <h5 className="card-title"> {item.first_name} {item.last_name} </h5>
                                            <p className='card-text text-secondary'><small> {item.email} </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
                <div className='mb-4'></div>
                <hr />

                <h4 className='text-secondary mt-3 mb-4'> Members </h4>
                {
                    memberData.map((item, index) => {
                        return (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-6 mb-3'>
                                <div className='card shadow hovercursor' >
                                    <div className='card-body d-flex align-items-center'>
                                        <img src={item.img} className='rounded-circle' style={{ width: '50px', height: '50px' }} />

                                        <div className='text-right offset-1'>
                                            <h5 className="card-title"> {item.first_name} {item.last_name} </h5>
                                            <p className='card-text text-secondary'><small> {item.email} </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}


export default Landingpage;