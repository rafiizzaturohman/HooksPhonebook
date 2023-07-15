import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, searchContact } from '../actions/users';

export default function UserForm(props) {
    const dispatch = useDispatch()
    const [contact, setContact] = useState({
        addCond: false,
        name: '',
        phone: '',
        searchName: '',
        searchPhone: ''
    })


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setContact({
            ...contact,
            [name]: value
        });
    }

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(addContact(contact.name, contact.phone))
        setContact({ addCond: true, name: '', phone: '' })
    }, [contact])

    const handleSearch = useCallback((event) => {
        event.preventDefault()
        dispatch(searchContact(contact.searchName, contact.searchPhone))
        setContact({ name: '', phone: '' })
    }, [contact])

    if (contact.addCond) {
        return (
            <div>
                {/* SEARCH START */}
                <div className='container'>
                    <div className='bg-blue-500 rounded-lg px-4 py-1'>
                        <h1 className=' text-lg text-white font-bold'>Search Contact</h1>
                    </div>

                    <form onSubmit={handleSearch} className=''>
                        <div id='searchForm' className='space-y-8 mt-8'>
                            <div className='space-x-5 flex justify-evenly items-center'>
                                <label className='text-lg font-semibold tracking-wide' htmlFor='searchName'>Name</label>
                                <input type='text' id='searchName' name='searchName' onChange={handleInputChange} value={contact.searchName} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </div>

                            <div className='space-x-4 flex justify-evenly items-center'>
                                <label className='text-lg font-semibold tracking-wide' htmlFor='searchPhone'>Phone</label>
                                <input type='text' id='searchPhone' name='searchPhone' onChange={handleInputChange} value={contact.searchPhone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </div>
                        </div>

                        <div>
                            <button className='hidden' type="submit" id="submit">Search</button>
                        </div>
                    </form>
                </div>
                {/* SEARCH END */}

                {/* ADD FORM START */}
                <div className='container mt-10'>
                    <div className='bg-blue-500 rounded-lg px-4 py-1'>
                        <h1 className=' text-lg text-white font-bold'>Add Contact</h1>
                    </div>

                    <div className=''>
                        <form onSubmit={handleSubmit} id='inputForm' className='space-y-8 mt-8'>
                            <div className='space-x-5 flex justify-evenly items-center'>
                                <label className='text-lg font-semibold tracking-wide' htmlFor='name'>Name</label>
                                <input type='text' id='name' name='name' onChange={handleInputChange} value={contact.name || ''} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' onInvalid={e => e.target.setCustomValidity('Please enter name here')} onInput={e => e.target.setCustomValidity('')} required />
                            </div>

                            <div className='space-x-4 flex justify-evenly items-center'>
                                <label className='text-lg font-semibold tracking-wide' htmlFor='phone'>Phone</label>
                                <input type='tel' pattern='[08][0-9]{11}' id='phone' name='phone' onChange={handleInputChange} value={contact.phone || ''} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' onInvalid={e => e.target.setCustomValidity('Please enter phone here')} onInput={e => e.target.setCustomValidity('')} required />
                            </div>

                            <p className='tracking-wide opacity-60'>Phone format: 0812345678912</p>

                            <div className='flex space-x-2'>
                                <button type='submit' className='transition flex text-white bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 pr-6'>
                                    <div className='bg-blue-600 px-2 py-1 rounded-lg'>
                                        <FontAwesomeIcon icon='plus' />
                                    </div>
                                    <p>Add</p>
                                </button>

                                <button type='button' onClick={() => setContact({ addCond: false, name: '', phone: '' })} className='transition flex text-white bg-amber-500 hover:bg-amber-600 hover:delay-150 rounded-lg font-semibold items-center space-x-2 pr-3'>
                                    <div className='bg-amber-600 px-2 py-1 rounded-lg'>
                                        <FontAwesomeIcon icon='ban' />
                                    </div>
                                    <p>Cancel</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* ADD FORM END */}
            </div>
        )
    } else {
        return (
            <div>
                {/* SEARCH START */}
                <div className='container'>
                    <div className='bg-blue-500 rounded-lg px-4 py-1'>
                        <h1 className=' text-lg text-white font-bold'>Search Contact</h1>
                    </div>

                    <form onSubmit={handleSearch}>
                        <div id='searchForm' className='space-y-8 mt-8'>
                            <div className='space-x-6 flex justify-evenly items-center'>
                                <label className='text-lg font-semibold tracking-wide' htmlFor='searchName'>Name</label>
                                <input type='text' id='searchName' name='searchName' onChange={handleInputChange} value={contact.searchName} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </div>

                            <div className='space-x-5 flex justify-evenly items-center'>
                                <label className='text-lg font-semibold tracking-wide' htmlFor='searchPhone'>Phone</label>
                                <input type='text' id='searchPhone' name='searchPhone' onChange={handleInputChange} value={contact.searchPhone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </div>
                        </div>

                        <div>
                            <button className='hidden' type="submit" id="submit">Search</button>
                        </div>
                    </form>
                </div>
                {/* SEARCH END */}

                {/* BUTTON ADD START */}
                <div className='container mt-10'>
                    <button type='button' onClick={() => setContact({ addCond: true, name: contact.name || '', phone: contact.phone || '' })} className='transition flex text-white bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 pr-6'>
                        <div className='bg-blue-600 px-3 py-1 rounded-lg'>
                            <FontAwesomeIcon icon='plus' />
                        </div>
                        <p>Add Contact</p>
                    </button>
                </div>
                {/* BUTTON ADD END */}
            </div>
        )
    }
}