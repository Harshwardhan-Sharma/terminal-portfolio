import {
	SiDjango,
	SiExpress,
	SiGo,
	SiJavascript,
	SiKotlin,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiPhp,
	SiPython,
	SiReact,
	SiRuby,
	SiRust,
	SiSqlite,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import Card from "./Card";

export default function Skills() {

	return (
		<>
		<div className="d-inline-grid grid-cols-4 gap-4 text-center">
			<div className="p-2">
				<Card Icon={SiReact} text="Reactjs" />
			</div>
			<div className="p-2">
				<Card Icon={SiNextdotjs} text="Next.js" />
			</div>
			<div className="p-2">
				<Card Icon={SiTailwindcss} text="TailwindCSS" />
			</div>
			<div className="p-2">
				<Card Icon={SiTypescript} text="TypeScript" />
			</div>
			<div className="p-2">
				<Card Icon={SiExpress} text="Express" />
			</div>
			<div className="p-2">
				<Card Icon={SiKotlin} text="Kotlin" />
			</div>
			<div className="p-2">
				<Card Icon={SiJavascript} text="Java" />
			</div>
			<div className="p-2">
				<Card Icon={SiPython} text="Python" />
			</div>
			<div className="p-2">
				<Card Icon={SiGo} text="Go" />
			</div>
			<div className="p-2">
				<Card Icon={SiRuby} text="Ruby" />
			</div>
			<div className="p-2">
				<Card Icon={SiRust} text="Rust" />
			</div>
			<div className="p-2">
				<Card Icon={SiDjango} text="Django" />
			</div>
			<div className="p-2">
				<Card Icon={SiMongodb} text="MongoDB" />
			</div>
			<div className="p-2">
				<Card Icon={SiSqlite} text="SQL" />
			</div>
			<div className="p-2">
				<Card Icon={SiMysql} text="Mysql" />
			</div>
			<div className="p-2">
				<Card Icon={SiPhp} text="PHP" />
			</div>

			<p className="p-2 text-gray-300 text-center text-md">And some more</p>
		</div>
		</>
	);
}