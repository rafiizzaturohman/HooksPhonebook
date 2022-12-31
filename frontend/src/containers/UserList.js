import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import UserItem from "../components/page/UserItem";
import { loadContact, loadMore, removeContact, resendContact, updateContact } from "../actions/users";

export default function UserList(props) {
    const contact = useSelector((state) => state.users.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContact())
    }, [dispatch])

    const scrolling = (event) => {
        var element = event.target;
        if (element.scrollHeight - element.scrollTop - element.clientHeight <= 1) {
            dispatch(loadMore())
        }
    }

    return (
        <div onScroll={scrolling} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 px-2 max-h-screen overflow-y-auto h-107">
            {
                contact.map((user, index) => (
                    <UserItem key={user.id} users={user} sent={user.sent} resend={() => dispatch(resendContact(user.id, user.name, user.phone))} remove={() => dispatch(removeContact(user.id))} update={(name, phone) => dispatch(updateContact(user.id, name, phone))} />
                ))
            }
        </div>
    )
}