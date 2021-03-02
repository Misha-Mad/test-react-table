function Modal({person}) {

    return (
        <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            {person.id + ' ' + person.firstName + ' ' + person.lastName}
                        </h5>
                    </div>
                    <div className="modal-body">
                        <div><span className='font-weight-bold'>E-mail: </span>{person.email}</div>
                        <div><span className='font-weight-bold'>Phone: </span>{person.phone}</div>
                        <div><span className='font-weight-bold'>Address: </span>{person.address}</div>
                        <div><span className='font-weight-bold'>Description: </span>{person.description}</div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;