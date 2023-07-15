import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import Modal from '../modal'

export default function UserItem(props) {
    const [modalOpen, setModalOpen] = useState(false)
    const [contact, setContact] = useState({
        editCond: false,
        id: props.users.id,
        name: props.users.name,
        phone: props.users.phone
    })

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setContact({
            ...contact,
            [name]: value
        });
    }

    const handleUpdate = useCallback((event) => {
        event.preventDefault()
        props.update(contact.name, contact.phone)

        setContact({ editCond: false, name: contact.name, phone: contact.phone })
    }, [props, contact])

    if (contact.editCond) {
        return (
            <div className='container shadow-2xl shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto space-y-2 px-8 py-5' >
                <div className='flex space-x-3 items-center'>
                    <FontAwesomeIcon icon='signature' />
                    <input type='text' name='name' id='name' value={contact.name} onChange={handleInputChange} className='px-2 py-1 border border-blue-400/75 rounded-lg w-full' required />
                </div>

                <div className='flex space-x-4 items-center'>
                    <FontAwesomeIcon icon='phone' />
                    <input type='tel' pattern='[08][0-9]{11}' name='phone' id='phone' value={contact.phone} onChange={handleInputChange} className='px-2 py-1 border border-blue-400/75 rounded-lg w-full' required />
                </div>

                <div className='flex justify-evenly py-2'>
                    <button type='button' onClick={handleUpdate} className='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>Update</button>

                    <button type='button' onClick={() => setContact({ editCond: false, name: contact.name, phone: contact.phone })} className='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>Cancel</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='transition ease-in-out container shadow-lg shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto space-y-4 px-8 py-5  border-2 border-blue-200 hover:-translate-y-1 hover:scale-103' >
                    <div className='flex space-x-3 items-center'>
                        <FontAwesomeIcon icon='signature' />
                        <h1>{contact.name}</h1>
                    </div>

                    <div className='flex space-x-4 items-center opacity-60'>
                        <FontAwesomeIcon icon='phone' />
                        <h1>{contact.phone}</h1>
                    </div>

                    {
                        props.users.sent === true ?
                            <div className='flex justify-evenly py-2'>
                                <button type='button' onClick={() => setContact({ editCond: true, name: props.users.name, phone: props.users.phone })} className='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>
                                    Edit
                                </button>

                                <button type='button' onClick={handleOpenModal} className='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>
                                    Delete
                                </button>
                            </div>
                            :
                            <div className='py-2'>
                                <button type='button' onClick={props.resend} className='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>
                                    Resend
                                </button>
                            </div>
                    }
                </div>
                <Modal isOpen={modalOpen} onClose={handleCloseModal} onDelete={props.remove} />
            </div>
        )
    }
}