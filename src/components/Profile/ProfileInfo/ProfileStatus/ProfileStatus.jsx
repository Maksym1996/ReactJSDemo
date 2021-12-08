import React, { useState } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [userStatus, setUserStatus] = useState(props.status);

    let activate = () => {
        setEditMode(true);
    }

    let deActivate = () => {
        setEditMode(false)
        props.onUpdateStatus(userStatus);
    }

    let onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value)
    }
    return (
        <div>
            My status: {!props.status
                ? <input
                    onBlur={deActivate}
                    onChange={onStatusChange} />
                : !editMode
                    ? <span onDoubleClick={activate}>{props.status}</span>
                    : <input
                        autoFocus={true}
                        onBlur={deActivate}
                        value={userStatus}
                        onChange={onStatusChange} />
            }
        </div>
    )
}

export default ProfileStatus