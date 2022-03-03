import React from "react";
import BaseLayout from "../components/BaseLayout";
import NewTodoForm from "../components/NewTodoForm";

export default function Create() {
	return (
		<BaseLayout>
			<NewTodoForm></NewTodoForm>
		</BaseLayout>
	);
}
