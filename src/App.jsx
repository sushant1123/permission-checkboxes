import { useState } from "react";
import "./App.css";
import CheckboxRow from "./CheckboxRow";

const createPerms = (count) => {
	let permsArr = [];
	for (let i = 0; i < count; i++) {
		permsArr.push({
			read: false,
			write: false,
			delete: false,
		});
	}
	return permsArr;
};

function App() {
	let permsAr = createPerms(4);
	const [permissions, setPermissions] = useState(permsAr);

	const updatePermission = (perm, id) => {
		let allPerms = [...permissions];
		allPerms[id] = perm;
		setPermissions(allPerms);
	};

	console.log({ permissions });

	return (
		<div className="App">
			<div className="grid">
				<span></span>
				<span>Read</span>
				<span>Write</span>
				<span>Delete</span>
				{permissions.map((permission, idx) => (
					<CheckboxRow
						key={"key-" + idx}
						permission={permission}
						id={idx}
						updatePermission={updatePermission}
						label={`t${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
