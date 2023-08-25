import React from 'react';
import { GrClose } from "react-icons/gr";
import { AiOutlineIdcard, IconName } from "react-icons/ai";

const DetailPopup = ({ modalHandler, modaldata }) => {
    return (
        <div>
            <div className="modal-container" >
                <div className="modal d-block show" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content" >
                            <div className="modal-header bg-secondary fw-bold text-light">
                                <AiOutlineIdcard/>
                                <h6 className="modal-title">{modaldata?.title}</h6>
                                <button
                                    type="button"
                                    // className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => modalHandler()}
                                >
                                    <GrClose/>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="description">Description - {modaldata?.description}</p>
                                <div className="d-flex justify-content-around">
                                    <span className="type">Type - {modaldata?.type}</span>
                                    <img
                                        src={modaldata?.imgurl}
                                        height={100}
                                        width={100}
                                        alt="img.png"
                                    />
                                </div>
                            </div>
                            
                            <div className="modal-footer bg-secondary fw-bold">
                                <button
                                    type="button"
                                    className="btn bg-light py-1 px-3"
                                    onClick={() => modalHandler()}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </div>
        </div>
    )
}

export default DetailPopup
