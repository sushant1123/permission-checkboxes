import React, { useState } from "react";

const CheckboxRow = ({ label, permission, id, updatePermission }) => {
	// const [perms, setPerms] = useState(permission);

	const allCheck = () => {
		let perms = {
			read: true,
			write: true,
			delete: true,
		};
		return perms;
	};

	const allUnCheck = () => {
		let perms = {
			read: false,
			write: false,
			delete: false,
		};
		return perms;
	};

	const handlePermsChange = (e) => {
		const { name, checked } = e.target;

		let allPerms = { ...permission };
		if (name === "delete" && checked == true) {
			allPerms = allCheck();
		} else if (name === "delete" && checked == false) {
			allPerms = allUnCheck();
		} else if (name !== "delete" && checked == false) {
			allPerms[name] = checked;
			allPerms["delete"] = false;
		} else {
			allPerms[name] = checked;
		}

		// setPerms({ ...allPerms });
		updatePermission(allPerms, id);
	};

	return (
		<>
			<span>{label}</span>
			<input
				type="checkbox"
				name="read"
				id="read"
				checked={permission.read}
				onChange={handlePermsChange}
			/>
			<input
				type="checkbox"
				name="write"
				id="write"
				checked={permission.write}
				onChange={handlePermsChange}
			/>
			<input
				type="checkbox"
				name="delete"
				id="delete"
				checked={permission.delete}
				onChange={handlePermsChange}
			/>
		</>
	);
};

export default CheckboxRow;
