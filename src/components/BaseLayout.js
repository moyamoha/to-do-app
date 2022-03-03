import Header from "./Header";

export default function BaseLayout({ children }) {
	return (
		<>
			<Header></Header>
			<div className="container">{children}</div>
		</>
	);
}
