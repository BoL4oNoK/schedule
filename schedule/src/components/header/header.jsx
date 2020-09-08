import { Radio } from "antd";
import "antd/dist/antd.css";
import "header.css"

export default function Header() {
	return (
		<>
			<Radio.Group defaultValue="a" buttonStyle="solid">
				<Radio.Button value="a">Student</Radio.Button>
				<Radio.Button value="b">Mentor</Radio.Button>
			</Radio.Group>
		</>
	)
}