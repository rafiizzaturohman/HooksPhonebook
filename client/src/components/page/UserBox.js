import UserForm from '../../containers/UserForm';
import UserList from '../../containers/UserList';

export default function UserBox() {
    return (
        <div>
            <div className='grid gap-8 my-28 mx-20 md:grid-cols-none xl:grid-cols-2'>
                {/* CARD FORM START */}
                <div>
                    <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
                        <div className='container py-16 px-24 space-y-10'>
                            <UserForm />
                        </div>
                    </div>
                </div>
                {/* CARD FORM END */}

                {/* CARD LIST START */}
                <div>
                    <div>
                        <div className='bg-gradient-to-tr from-blue-700 to-blue-500 px-8 py-1 rounded-md shadow-md'>
                            <h1 className='text-3xl text-white font-bold tracking-wide'>Phonebook App</h1>
                        </div>

                        <div className='container mt-8'>
                            <UserList />
                        </div>
                    </div>
                </div>
                {/* CARD LIST END */}
            </div>
        </div >
    )
}